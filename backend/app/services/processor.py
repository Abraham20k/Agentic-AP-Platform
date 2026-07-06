import time

from sqlalchemy.orm import Session

from app.models.invoice import Invoice


def process_invoice(invoice_id: int, db: Session):

    invoice = db.query(Invoice).filter(Invoice.id == invoice_id).first()

    if not invoice:
        return

    stages = [
        "OCR Processing",
        "Data Extracted",
        "Validation Complete",
        "Approved"
    ]

    for stage in stages:
        time.sleep(2)

        invoice.status = stage

        db.commit()
        db.refresh(invoice)