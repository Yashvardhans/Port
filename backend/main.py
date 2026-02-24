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

# Create tables if they don't exist
Base.metadata.create_all(bind=engine)

app = FastAPI()

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


# ---------- Request Model ----------

class ChatRequest(BaseModel):
    message: str


# ---------- Routes ----------

@app.get("/")
async def root():
    return {"message": "Backend running 🚀"}


@app.post("/chat")
async def chat(req: ChatRequest, db: Session = Depends(get_db)):

    # Fetch first resume entry
    resume = db.query(Resume).first()

    if resume:
        context = f"""
Name: {resume.name}
Role: {resume.role}
Skills: {resume.skills}
Education: {resume.education}
Projects: {resume.projects}
Location: {resume.location}
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