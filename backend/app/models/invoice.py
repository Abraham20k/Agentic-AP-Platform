from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from app.database import Base


class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String, nullable=False)

    vendor = Column(String, nullable=False)

    amount = Column(Float, nullable=False)

    status = Column(String, default="Uploaded")

    uploaded_at = Column(DateTime, default=datetime.utcnow)

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )