from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

from database.database import SessionLocal
from models.models import Resume
from utils.rag import retrieve

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")


class ChatRequest(BaseModel):
    message: str


@app.get("/")
async def root():
    return {"message": "Backend running 🚀"}


@app.post("/chat")
async def chat(req: ChatRequest):

    relevant_docs = retrieve(req.message)
    context = "\n".join(relevant_docs)

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
            "messages": [
                {"role": "user", "content": prompt}
            ],
        },
    )

    return response.json()