from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/")
async def upload_invoice(
    file: UploadFile = File(...)
):

    destination = UPLOAD_FOLDER / file.filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Upload successful",
        "filename": file.filename
    }