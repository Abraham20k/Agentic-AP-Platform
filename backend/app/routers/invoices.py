from fastapi import APIRouter, Depends, BackgroundTasks 
from fastapi import HTTPException
from app.services.processor import process_invoice
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.invoice import Invoice
from app.schemas.invoice import InvoiceCreate, InvoiceResponse

router = APIRouter(
    prefix="/invoices",
    tags=["Invoices"]
)


@router.post("/", response_model=InvoiceResponse)
def create_invoice(
    invoice: InvoiceCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    new_invoice = Invoice(
        filename=invoice.filename,
        vendor=invoice.vendor,
        amount=invoice.amount
    )

    db.add(new_invoice)
    db.commit()
    db.refresh(new_invoice)

    background_tasks.add_task(
    process_invoice,
    new_invoice.id,
    db
)

    return new_invoice

@router.get("/", response_model=list[InvoiceResponse])
def get_invoices(
    db: Session = Depends(get_db)
):
    invoices = db.query(Invoice).all()
    return invoices


@router.get("/{invoice_id}", response_model=InvoiceResponse)
def get_invoice(
    invoice_id: int,
    db: Session = Depends(get_db)
):
    invoice = db.query(Invoice).filter(
        Invoice.id == invoice_id
    ).first()

    if invoice is None:
        raise HTTPException(
            status_code=404,
            detail="Invoice not found"
        )

    return invoice