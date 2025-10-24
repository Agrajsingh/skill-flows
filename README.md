# SkillFlow - Full-Stack Course Management System

A comprehensive full-stack development bootcamp platform with job assurance, built with React.js and Node.js.

## 🚀 Features

### For Students:
- Browse and enroll in courses
- Watch video lectures with progress tracking
- View course dashboard with completion status
- Access uploaded documents with AI summarization
- User authentication and profile management

### For Admins:
- Create and manage courses
- Upload course videos and materials
- Manage user enrollments
- Upload documents (PDF, DOCX, TXT) with AI summarization
- Admin dashboard with full CRUD operations

## 🛠️ Tech Stack

- **Frontend**: React.js, Bootstrap, React Router, Context API
- **Backend**: Node.js, Express.js, MongoDB with Mongoose
- **Authentication**: JWT tokens with bcrypt password hashing
- **File Processing**: Multer for uploads, PDF parsing, AI summarization with OpenAI

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key (for document summarization)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Agrajsingh/skill-flows.git
   cd skill-flows
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration:
   ```env
   # Database
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillflows

   # JWT Secret (use a strong secret)
   JWT_SECRET=your-super-secret-jwt-key

   # OpenAI API Key
   OPENAI_API_KEY=sk-your-openai-api-key

   # Client Configuration
   REACT_APP_API_URL=http://localhost:5000
   ```

4. **Set up initial data (optional)**
   ```bash
   # Create admin user
   npm run create-admin-user --prefix server

   # Create sample courses
   npm run create-courses --prefix server
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm start
```
This will start both client (React) and server (Node.js) concurrently.

- Client: http://localhost:3000
- Server: http://localhost:5000

### Production Build
```bash
npm run build
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `OPENAI_API_KEY`
   - `NODE_ENV=production`

3. **Deploy** - Vercel will automatically build and deploy both client and server

### Render

1. **Create a new Web Service**
2. **Set build command**: `npm run build`
3. **Set start command**: `npm start`
4. **Add environment variables** in Render dashboard

### Manual Deployment

1. **Build the client**
   ```bash
   npm run build
   ```

2. **Set environment variables** for production
3. **Start the server**
   ```bash
   NODE_ENV=production npm start --prefix server
   ```

## 📁 Project Structure

```
skill-flows/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context providers
│   │   └── ...
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── index.js          # Server entry point
├── uploads/              # File uploads directory
└── package.json          # Root package configuration
```

## 🔐 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user

### Admin
- `POST /admin/register` - Admin registration
- `POST /admin/login` - Admin login
- `GET /admin/me` - Get current admin

### Courses
- `GET /courses` - Get all courses
- `GET /courses/:id` - Get course by ID
- `POST /courses` - Create course (admin only)
- `PUT /courses/:id` - Update course (admin only)
- `DELETE /courses/:id` - Delete course (admin only)

### Enrollments
- `GET /enrollments` - Get user's enrollments
- `POST /enrollments` - Enroll in course
- `PUT /enrollments/progress` - Update progress
- `GET /enrollments/available` - Get available courses

### Documents
- `POST /documents/upload` - Upload document (admin only)
- `GET /documents/list` - List all documents
- `POST /documents/summarise` - Summarize document with AI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

## 🔄 Updates

- **v3.2**: Refactored into lean, wizard-based architecture
- **v3.1**: Added AI document summarization
- **v3.0**: Complete rebuild with React and Node.js
- **v2.0**: Added admin panel and course management
- **v1.0**: Initial release with basic course functionality
