# AppNest

AppNest is a modern web application designed to provide users with a seamless experience for browsing, reviewing, and managing apps. It includes features like user authentication, app details, blogs, and profile management.

---

## Features

### 1. **Authentication**
- Users can register and log in using the `/auth/register` and `/auth/login` routes.
- Protected routes ensure only authenticated users can access certain pages like `/auth/profile` and `/app-details/:id`.

### 2. **App Details**
- Users can view detailed information about apps, including features, ratings, and reviews.
- Users can submit reviews and ratings for apps they have installed.

### 3. **Blogs**
- Stay updated with the latest insights and news through the `/blogs` page.
- Blogs include categories, publication dates, and expandable content with "Read More" functionality.

### 4. **Profile Management**
- Users can view and edit their profile information (name and photo URL) on the `/auth/profile` page.
- Profile updates are securely handled using Firebase's `updateProfile()` method.

### 5. **Responsive Design**
- The application is fully responsive and optimized for small (`sm`), medium (`md`), and large (`lg`) devices.

---

## Pages and Routes

### **Public Routes**
- `/` - Home page.
- `/auth/login` - Login page.
- `/auth/register` - Registration page.
- `/blogs` - Blogs page.

### **Protected Routes**
- `/auth/profile` - User profile page (requires login).
- `/app-details/:id` - App details page (requires login).

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Routing**: React Router
- **Authentication**: Firebase Authentication
- **Backend**: Firebase Realtime Database (for user profile updates)
- **Icons**: React Icons
- **Notifications**: React Toastify

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/fuadhasan05/AppNest.git
