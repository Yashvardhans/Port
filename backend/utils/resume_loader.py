from docx import Document

def load_resume_text(path: str) -> str:
    doc = Document(path)

    text = []
    for para in doc.paragraphs:
        if para.text.strip():
            text.append(para.text.strip())

    return "\n".join(text)