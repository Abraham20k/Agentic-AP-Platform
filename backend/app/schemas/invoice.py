from pydantic import BaseModel
from datetime import datetime


class InvoiceCreate(BaseModel):
    filename: str
    vendor: str
    amount: float


class InvoiceResponse(BaseModel):
    id: int
    filename: str
    vendor: str
    amount: float
    status: str
    uploaded_at: datetime

    class Config:
        from_attributes = True