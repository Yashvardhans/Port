from sentence_transformers import SentenceTransformer
import numpy as np
import os
from utils.resume_loader import load_resume_text

model = SentenceTransformer("all-MiniLM-L6-v2")


script_dir = os.path.dirname(os.path.abspath(__file__))
resume_path = os.path.join(script_dir, "Yresume.docx")

resume_text = load_resume_text(resume_path)


documents = [
    chunk.strip()
    for chunk in resume_text.split("\n")
    if chunk.strip()
]

doc_embeddings = model.encode(documents)


def retrieve(query, k=5):
    query_embedding = model.encode(query)
    scores = np.dot(doc_embeddings, query_embedding)

    top_indices = np.argsort(scores)[-k:][::-1]
    return [documents[i] for i in top_indices]