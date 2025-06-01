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

## 🌐 Live Demo (Optional)

Visit: https://ci-cd-node-app-dr9i.onrender.com 
(Hosted via Render)

## 📜 License

MIT
