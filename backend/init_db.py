from database.database import engine, SessionLocal
from models.models import Resume, Base

Base.metadata.create_all(bind=engine)

db = SessionLocal()

resume = Resume(
    name="Yashvardhan Singh",
    role="Full Stack Developer",
    skills="React, Node.js, Python, MongoDB, AI/ML",
    education="B.Tech in Computer Science (AI & ML)",
    projects="Netflix Clone, StackOverflow Clone, StudyVerse",
    location="Kanpur, UP, India",
)

db.add(resume)
db.commit()
db.close()

print("Database initialized ✅")