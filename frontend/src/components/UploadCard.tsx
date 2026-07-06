import "./UploadCard.css";

import { UploadCloud } from "lucide-react";

import { uploadInvoice } from "../services/uploadService";

export default function UploadCard() {

    const handleUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files?.length)
            return;

        const file =
            e.target.files[0];

        const result =
            await uploadInvoice(file);

        alert(result.message);

    };

    return (

        <label
            className="upload-card"
        >

            <UploadCloud size={55} />

            <h2>

                Upload Invoice

            </h2>

            <p>

                Click to upload a PDF

            </p>

            <input
                hidden
                type="file"
                accept=".pdf"
                onChange={handleUpload}
            />

            <button type="button">

                Choose File

            </button>

        </label>

    );

}