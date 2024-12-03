# File Metadata API with Java Spring Boot, React, and MinIO

A full-stack application for managing file metadata using Java Spring Boot for the backend, React for the frontend, and MinIO for object storage.

## Features

- File upload with metadata storage
- File search by filename or content type
- File download functionality
- Metadata storage in PostgreSQL
- Object storage in MinIO

## Tech Stack

- Backend:
  - Java Spring Boot
  - Spring Data JPA
  - PostgreSQL
  - MinIO Client
- Frontend:
  - React
  - Material-UI
  - Axios

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js and npm
- Java 11
- Maven

### Running the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/YounesElhakimi/File-Metadata-API-with-Java-Spring-Boot-React-and-MinIO.git
   cd File-Metadata-API-with-Java-Spring-Boot-React-and-MinIO
   ```

2. Start the services using Docker Compose:
   ```bash
   docker-compose up
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080
   - MinIO Console: http://localhost:9001

## Development

### Backend Development

```bash
cd backend
mvn spring-boot:run
```

### Frontend Development

```bash
cd frontend
npm install
npm start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.