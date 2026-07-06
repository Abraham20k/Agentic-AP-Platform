# Agentic AP Platform

An AI-assisted Accounts Payable (AP) platform built with FastAPI and React.

## Features

- Invoice creation
- Invoice retrieval
- Background invoice processing
- REST API built with FastAPI
- React + TypeScript frontend
- Axios integration
- TanStack Query for server state
- React Router
- SQLite database
- Docker support

---

## Tech Stack

### Backend

- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

### Frontend

- React
- TypeScript
- Vite
- React Router
- Axios
- TanStack Query
- Tailwind CSS

---

## Project Structure

```
agentic-ap-platform/
│
├── backend/
│   ├── app/
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

---

# Running Locally

## Clone

```bash
git clone <repository-url>
cd agentic-ap-platform
```

---

## Backend

```bash
cd backend

python -m venv venv
```

### Windows

```powershell
venv\Scripts\activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger UI:

```
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd frontend

npm install
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Docker

## Build and Start

```bash
docker compose up --build
```

The application will be available at:

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:8000
```

Swagger

```
http://localhost:8000/docs
```

---

## Stop

```bash
docker compose down
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/invoices/` | Retrieve all invoices |
| GET | `/invoices/{id}` | Retrieve a specific invoice |
| POST | `/invoices/` | Create a new invoice |

---

# Future Improvements

- OCR integration
- LLM-powered invoice extraction
- WebSocket live status updates
- Authentication
- PostgreSQL support
- Cloud deployment

---

# Author

Abraham Senjith