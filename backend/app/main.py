from fastapi import FastAPI
from app.routers import invoices
from app.routers import dashboard
from app.database import Base, engine

# Import models so SQLAlchemy knows about them
from app.models.invoice import Invoice

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Agentic AP Platform",
    version="1.0.0"
)

app.include_router(invoices.router)
app.include_router(dashboard.router)
@app.get("/")
def home():
    return {
        "message": "Agentic AP Platform Backend Running 🚀"
    }