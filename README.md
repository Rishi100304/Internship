# Web Development Internship – Project Repository

## 📋 Overview

This repository contains the projects and tasks completed during a Web Development Internship. The internship involved working on three main assignments:

1. **Website Replication**
2. **Backend Form with Email Integration**
3. **Blog Website (CRUD App using EJS and Express.js)**

Each project showcases different aspects of web development, including frontend design, server-side programming, and full-stack application development.

---


---

## 🚀 Project 1: Website Replication

### 🔧 Description
- Recreated a static version of an existing website using **HTML**, **CSS**, and **JavaScript**.
- The goal was to match the layout, fonts, icons, and color scheme as closely as possible to the reference site.

### 🛠 Technologies
- HTML5
- CSS3
- JavaScript (Vanilla)

### 📷 Preview
![image](https://github.com/user-attachments/assets/6e66ce8d-4f50-46b3-95a7-99290e9c7123)


---

## ✉️ Project 2: Form Submission with Email Notification

### 🔧 Description
- Developed a form to collect user data (Name, Role, Email, etc.).
- On submission, the form data is sent to the backend.
- A confirmation email is triggered and sent to the entered email address using **Nodemailer**.

### 🛠 Technologies
- HTML/CSS
- Node.js
- Express.js
- Nodemailer

### 🔄 Flow
1. User fills out the form.
2. Data sent to Express backend via POST request.
3. Nodemailer sends an email to the user with submitted details.

![image](https://github.com/user-attachments/assets/b462844f-f2f3-446b-ae19-a03b3305fe2f)


---

## 📝 Project 3: Blog Website (CRUD App)

### 🔧 Description
- Built a dynamic blog website with full CRUD functionality.
- Users can:
  - Create new posts
  - Read existing posts
  - Edit or delete posts

### 🛠 Technologies
- Node.js
- Express.js
- EJS (Embedded JavaScript)
- HTML/CSS

### 📂 Features
- RESTful routing
- Server-side rendering using EJS
- Modular structure for scalability

![image](https://github.com/user-attachments/assets/165a729e-a811-42d8-b825-38c1973585ff)

![image](https://github.com/user-attachments/assets/731a1516-7d51-4277-96cd-dc7de5fd41d4)

![image](https://github.com/user-attachments/assets/fa98d28b-6ea3-4fd6-8fa5-7353373e261b)


---

## ✅ How to Run the Projects

### Prerequisites
- Node.js and npm installed

### Clone Repository
```bash
git clone https://github.com/yourusername/web-dev-internship.git
cd web-dev-internship

Running Each Project
Website Replica
No server needed:
cd website-replica
open index.html

Form Submission Backend
cd form-email-backend
npm install
node server.js
Visit http://localhost:3000 in your browser.

Blog Website
cd blog-website
npm install
node server.js
node index.js on a seperate terminal
Visit http://localhost:3000 in your browser.
