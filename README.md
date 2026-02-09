# User Storage Data – GCP Bucket Project

A full-stack web application that securely stores user credentials in **Google Cloud Storage**. The project features a modern frontend UI, Express.js backend, and Google Cloud integration.

---

## 🎯 Features

- **Secure User Registration**: Store user credentials in Google Cloud Storage
- **Frontend UI**: Modern, responsive login interface with client-side validation
- **Backend API**: RESTful API built with Express.js
- **Cloud Storage**: Integration with Google Cloud Storage for data persistence
- **CORS Support**: Cross-origin requests enabled
- **Input Validation**: Client and server-side validation for security

---

## 🏗️ Project Structure

```
.
├── backend/
│   ├── package.json          # Node.js dependencies
│   └── server.js             # Express server & API routes
├── frontend/
│   └── index.html            # Frontend UI & login form
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## Data Output Result
![Screenshot](user_result_ss.png)


## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Node.js, Express.js |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Storage** | Google Cloud Storage |
| **Middleware** | Body-Parser |

---

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Account with Storage bucket
- Google Cloud credentials JSON file

---

## 🚀 Getting Started

### 1. Clone and Navigate

```bash
git clone <repository-url>
cd User_Storage_Data
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `credentials.json` file in the backend folder with your Google Cloud credentials (already in .gitignore for security).

### 3. Start the Backend

```bash
node server.js
```

The backend will run on `http://localhost:3000`

### 4. Frontend Setup

Open `frontend/index.html` in your browser or serve it using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

---

## 📡 API Endpoints

### POST /login
Registers a new user and stores credentials in Google Cloud Storage.

**Request:**
```json
{
  "username": "john_doe",
  "password": "password123"
}
```

**Response (Success - 200):**
```json
{
  "message": "User stored successfully"
}
```

**Response (Username Exists - 409):**
```json
{
  "message": "Username already exists"
}
```

**Response (Missing Fields - 400):**
```json
{
  "message": "Username and password are required"
}
```

---

## 🔐 Security Features

- Username normalization (lowercase, trimmed)
- Duplicate username detection
- Client-side password validation (alphanumeric only)
- CORS enabled for controlled access
- Google Cloud credentials secured in .gitignore
- Error handling without exposing internal details

---

## 📦 Dependencies

**Backend** (`backend/package.json`):
- `express@^5.2.1` - Web framework
- `body-parser@^2.2.2` - Request body parsing
- `cors@^2.8.6` - Cross-origin resource sharing
- `@google-cloud/storage@^7.19.0` - Google Cloud Storage client

---

## 🎨 Frontend Features

- Modern, responsive design
- Real-time form validation
- Error message display
- Loading state handling
- Mobile-friendly layout

---

## 🚢 Deployment

The project is designed to deploy on Google Cloud VM with:
- **NGINX** for frontend serving
- **Node.js** for backend
- **Google Cloud Storage** for data persistence

---



