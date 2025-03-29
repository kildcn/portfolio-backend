# Portfolio Website

A modern, responsive portfolio website built with Laravel and React to showcase my projects and skills as a developer.

## 🚀 Features

- **Modern UI/UX**: Clean interface with dark/light mode toggle
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Project Showcase**: Gallery of projects with detailed information
- **Skills & Profile**: Comprehensive display of technical skills and background
- **Contact Form**: Easy way for visitors to get in touch
- **API-Driven Architecture**: Frontend and backend separation for scalability

## 🛠️ Technology Stack

### Backend
- **Laravel 12**: PHP framework for robust APIs and backend functionality
- **SQLite**: Lightweight database for storing portfolio data
- **RESTful API**: Clean API design for frontend consumption

### Frontend
- **React**: JavaScript library for building dynamic user interfaces
- **Tailwind CSS**: Utility-first CSS framework for modern designs
- **Vite**: Next-generation frontend build tool

### Deployment
- **Render**: Cloud platform for deployment
- **Docker**: Containerization for consistent environments

## 📋 Project Structure

```
├── app/                     # Laravel backend application
│   ├── Http/Controllers/    # API controllers
│   ├── Models/              # Database models
├── database/                # Database migrations and seeders
├── portfolio-frontend/      # React frontend application
│   ├── src/                 # Frontend source code
│   │   ├── components/      # React components
│   │   ├── App.jsx          # Main React application
├── public/                  # Public assets
├── routes/                  # API routes
```

## 🚦 Getting Started

### Prerequisites
- PHP 8.2+
- Composer
- Node.js & npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kildcn/portfolio-backend.git
   cd portfolio-backend
   ```

2. Install backend dependencies:
   ```bash
   composer install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Run database migrations and seeders:
   ```bash
   touch database/database.sqlite
   php artisan migrate --seed
   ```

5. Install frontend dependencies:
   ```bash
   cd portfolio-frontend
   npm install
   ```

### Running Locally

1. Start the Laravel server:
   ```bash
   php artisan serve
   ```

2. In a separate terminal, start the React development server:
   ```bash
   cd portfolio-frontend
   npm run dev
   ```

3. Access the application:
   - Backend API: `http://localhost:8000`
   - Frontend: `http://localhost:5173`

## 🔄 API Endpoints

- `GET /api/projects`: Get all projects
- `GET /api/projects/{id}`: Get a specific project
- `GET /api/profile`: Get profile information

## 🌐 Deployment

The project is deployed using Render with a multi-service setup:

1. **Backend API**: Dockerized Laravel application
2. **Frontend**: Static site built with Vite and served by Render

For deployment instructions, see `render.yaml` in the repository.

## 📊 Project Data Model

### Profile
Stores personal information, skills, and contact details.

### Projects
Stores information about projects including:
- Name
- Description
- Technologies used
- GitHub URL
- Live URL
- Featured status
- Category
- Display order

## 🎨 Customization

To customize the portfolio:

1. Update database seeders in `database/seeders/`
2. Modify React components in `portfolio-frontend/src/components/`
3. Adjust tailwind styling in the frontend directory

## 🔧 Future Improvements

- Add authentication for admin dashboard
- Implement project filtering by technology
- Add blog functionality
- Implement contact form email functionality

## 📄 License

This project is open-source and available under the MIT License.

## 👨‍💻 Author

- Killian Le Doucen
- GitHub: [@kildcn](https://github.com/kildcn)
- LinkedIn: [Killian Le Doucen](https://linkedin.com/in/killian-le-doucen-40382a253/)

---

Built with ❤️ using Laravel and React
