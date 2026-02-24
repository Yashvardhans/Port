from sqlalchemy import Column, Integer, String, Text
from database.database import Base

class Resume(Base):
    __tablename__ = "resume"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    role = Column(String)
    skills = Column(Text)
    education = Column(Text)
    projects = Column(Text)
    location = Column(String)