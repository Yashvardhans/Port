from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv
from sqlalchemy.orm import Session

from database.database import SessionLocal, engine
from models.models import Base, Resume

load_dotenv()

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

# ---------- Database Dependency ----------

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---------- Request Models ----------

class ChatRequest(BaseModel):
    message: str

class ResumeCreate(BaseModel):
    name: str
    role: str
    location: str
    full_text: str

# ---------- Routes ----------

@app.get("/")
async def root():
    return {"message": "Backend running 🚀"}



@app.post("/resume")
def add_resume(resume: ResumeCreate, db: Session = Depends(get_db)):

    # Delete old resume so only one exists
    db.query(Resume).delete()
    db.commit()

    new_resume = Resume(
        name=resume.name,
        role=resume.role,
        location=resume.location,
        full_text=resume.full_text,
    )

    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    return {"message": "Resume saved successfully"}



@app.post("/chat")
async def chat(req: ChatRequest, db: Session = Depends(get_db)):

    resume = db.query(Resume).first()

    if resume:
        context = f"""
Name: {resume.name}
Role: {resume.role}
Location: {resume.location}

Resume Information:
{resume.full_text}
"""
    else:
        context = "No resume data available."

    prompt = f"""
You are an AI assistant for Yashvardhan Singh Bhadoria's portfolio website.

Answer questions about his projects, experience, skills,
and background using ONLY the information below.

STRICT RULES:

1. Do NOT invent information
2. Do NOT use outside knowledge
3. Be concise and professional
4. Do NOT mention the source
5. If the answer is not available, reply EXACTLY:

"I don’t have that information. Please contact me for more details."

GREETING RULE:
If the user greets, reply ONLY:

"Hello! I’m Yashvardhan Singh Bhadoria, a Full-Stack Developer based in Kanpur, UP, India."

--------------------
Information:
{context}
--------------------

User:
{req.message}

Answer:
"""

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": "arcee-ai/trinity-large-preview:free",
            "messages": [{"role": "user", "content": prompt}],
        },
    )

    return response.json()