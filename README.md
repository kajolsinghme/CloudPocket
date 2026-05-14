# CloudPocket

Production-ready file upload & processing backend built with Node.js, Express, Docker, and AWS. Used Docker on EC2, integrated AWS S3 for file storage, AWS Secrets Manager for secure configuration management, CloudWatch for monitoring/logging, and automated deployments using CI/CD pipelines.

---

# Overview

CloudPocket is a backend-focused mini production system where users can upload files, store them securely on AWS S3, process them asynchronously, and monitor the application like a real-world cloud service.

This project was built to simulate real production workflows and demonstrate practical backend + DevOps engineering skills.

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB / PostgreSQL
* Multer

## AWS Services

* AWS EC2
* AWS S3
* AWS Secrets Manager
* AWS CloudWatch

## DevOps

* Docker
* Docker Compose
* PM2
* GitHub Actions
* SSH

---

# Features

* Upload image/pdf files
* Store files in AWS S3
* Save file metadata in database
* Background file processing
* Dockerized application
* CI/CD deployment pipeline
* Secure secrets management
* Monitoring & centralized logging
* PM2 process management
* Production-style backend architecture

---

# Architecture

```txt
Client
   ↓
Express API
   ↓
AWS S3 ─── Database
   ↓
Background Worker
   ↓
CloudWatch Logs
```

---

# Folder Structure

```bash
CloudPocket/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── workers/
│   ├── config/
│   └── utils/
│
├── Dockerfile
├── docker-compose.yml
├── pm2.config.js
├── .github/workflows/
└── README.md
```

---

# AWS Services Used

## AWS S3

Used for secure file storage.

### Responsibilities:

* Store uploaded files
* Generate file URLs
* Handle scalable object storage

---

## AWS EC2

Used for hosting backend services and Docker containers.

### Responsibilities:

* Host Node.js application
* Run Docker containers
* Handle production deployment

---

## AWS Secrets Manager

Used to securely manage sensitive environment variables.

### Stored Secrets:

* Database URL
* AWS credentials
* JWT secrets

---

## AWS CloudWatch

Used for production monitoring and observability.

### Monitoring Includes:

* API logs
* Error logs
* Runtime monitoring
* Server diagnostics

---

# Docker Setup

## Build Image

```bash
docker build -t cloudpocket .
```

## Run Container

```bash
docker run -p 5000:5000 cloudpocket
```

## Docker Compose

```bash
docker-compose up
```

---

# PM2 Setup

Run app in production using PM2.

```bash
pm2 start app.js
pm2 save
pm2 startup
```

### Benefits

* Auto restart on crashes
* Background process management
* Better production uptime

---

# Deployment (AWS EC2)

## SSH into EC2

```bash
ssh -i key.pem ubuntu@your-ec2-ip
```

## Install Dependencies

* Docker
* Node.js
* PM2

## Run Application

```bash
docker-compose up -d
```

or

```bash
pm2 start app.js
```

---

# CI/CD Pipeline

Automated using GitHub Actions.

### Workflow

On every push to `main`:

1. Build Docker image
2. SSH into EC2
3. Pull latest code
4. Restart containers / PM2
5. Deploy latest version

---

# Environment Variables

```env
PORT=5000
DB_URL=your_database_url
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_BUCKET_NAME=your_bucket
```

Production setup uses AWS Secrets Manager instead of local `.env` files.

---

# Skills Demonstrated

* REST API development
* File upload handling
* AWS cloud integration
* Docker & containerization
* CI/CD automation
* Server deployment
* Monitoring & logging
* Production backend architecture

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/cloudpocket.git
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---


# Author

Built by Kajol
