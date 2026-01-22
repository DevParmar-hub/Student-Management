#  Student Management System

This is a simple **Student Management web app** built using **vanilla JavaScript** and a REST API.  
The project was created to practice **CRUD operations**, **API integration**, **pagination**, and **dynamic DOM manipulation**.

Instead of relying on frameworks, everything is handled using plain JavaScript to better understand how data flows between the frontend and backend.

---

# Features

Student Listing  
• Fetches student data from an external API  
• Displays students as cards  
• Pagination support (Next / Back)  

Add Student  
• Add a new student using a form  
• Data is sent to the backend using POST requests  

Update Student  
• Edit existing student details  
• Pre-fills form with current data  
• Updates data using PUT requests  

Delete Student  
• Delete a student record  
• Removes data using DELETE requests  

UI Interaction  
• Modal-based form for add/update  
• Overlay background for focus  
• Dynamic UI updates without page reload  

---

# Tech Stack

Frontend  
• HTML  
• CSS  
• JavaScript (Vanilla)

Backend
• Pre-built REST API used for learning purposes  
• Used to practice CRUD operations and frontend–backend interaction  
• Hosted externally and accessed via fetch API

---

# API Endpoints Used

• GET `/student/all` – Fetch all students  
• POST `/student/add` – Add a new student  
• PUT `/student/update/:id` – Update student details  
• DELETE `/student/delete/:id` – Delete a student  

---

# What I Learned

• Working with REST APIs  
• Implementing CRUD operations  
• Pagination logic  
• Event delegation  
• Managing UI state without frameworks  
• Handling async JavaScript with fetch  

---

# Future Improvements

• Search and filter students  
• Better form validation  
• Confirmation modal for delete  
• Improved UI/UX  
• Responsive design  

---

# Purpose

This project was built as a **learning-focused exercise** to strengthen JavaScript fundamentals and understand how frontend applications interact with backend APIs.
