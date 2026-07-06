from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.invoice import Invoice

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def get_dashboard(db: Session = Depends(get_db)):

    total = db.query(Invoice).count()

    approved = db.query(Invoice).filter(
        Invoice.status == "Approved"
    ).count()

    processing = db.query(Invoice).filter(
        Invoice.status != "Approved"
    ).count()

    failed = db.query(Invoice).filter(
        Invoice.status == "Failed"
    ).count()

    return {
        "totalInvoices": total,
        "approved": approved,
        "processing": processing,
        "failed": failed
    }