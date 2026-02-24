from sentence_transformers import SentenceTransformer
import numpy as np
import os
from utils.resume_loader import load_resume_text

_model = None
_documents = None
_doc_embeddings = None


def initialize():
    global _model, _documents, _doc_embeddings

    if _model is not None:
        return

    # Load model
    _model = SentenceTransformer("all-MiniLM-L6-v2")

    # Load resume
    script_dir = os.path.dirname(os.path.abspath(__file__))
    resume_path = os.path.join(script_dir, "Yresume.docx")

    resume_text = load_resume_text(resume_path)

    _documents = [
        chunk.strip()
        for chunk in resume_text.split("\n")
        if chunk.strip()
    ]

   
    _doc_embeddings = _model.encode(_documents)


def retrieve(query, k=5):
    initialize()

    query_embedding = _model.encode(query)
    scores = np.dot(_doc_embeddings, query_embedding)

    top_indices = np.argsort(scores)[-k:][::-1]
    return [_documents[i] for i in top_indices]