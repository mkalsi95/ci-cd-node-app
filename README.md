# CI/CD Node.js App

A simple Node.js API that returns random tech quotes. Built to demonstrate a working CI/CD pipeline using GitHub Actions, with optional deployment to Render.

## 🚀 Features

- Basic Node.js HTTP server
- Returns random quotes at `/quote` endpoint
- Unit testing with Jest
- CI pipeline with GitHub Actions
- (Optional) Deployment to Render

## 📂 Project Structure

.
├── index.js              # Main server file  
├── quotes.js             # Quote logic  
├── tests/  
│   └── quotes.test.js    # Unit test for getRandomQuote()  
└── .github/workflows/  
    └── ci.yml            # GitHub Actions CI pipeline

## 🧪 How to Run Locally

1. Clone the repo

   git clone https://github.com/mkalsi95/ci-cd-node-app.git  
   cd ci-cd-node-app

2. Install dependencies

   npm install

3. Start the server

   node index.js

Then visit: http://localhost:3000/quote

## 🧪 Run Tests

   npm test

## ⚙️ CI/CD with GitHub Actions

- Automatically runs `npm install` and `npm test` on every push and pull request.
- Workflow is defined in `.github/workflows/ci.yml`.

## 🐳 Docker + Nginx (Project 2 Upgrade)

This project is also configured to run in Docker, with an Nginx reverse proxy in front of the Node.js app — simulating a basic production environment.

### Run with Docker Compose

```bash
docker compose up --build
```

- Access the app at: http://localhost/quote  
- Nginx listens on port 80 and forwards traffic to the Node.js app on port 3000

### Key Files

- `Dockerfile` – Builds the Node.js app container  
- `docker-compose.yml` – Runs app + Nginx as services  
- `nginx/default.conf` – Nginx reverse proxy config  
- `.dockerignore` – Excludes unnecessary files from image

## 🌐 Live Demo (Optional)

Visit: https://ci-cd-node-app-dr9i.onrender.com 
(Hosted via Render)

## 📜 License

MIT
