# Stage 1: Python backend setup
FROM python:3.9-slim

# Set the working directory for the backend
WORKDIR /app

# Copy only the backend-related files
COPY ./src ./src
COPY ./models ./models
COPY ./data ./data
COPY ./app.py ./app.py
COPY ./requirements.txt ./requirements.txt

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port for Flask app (default 5000)
EXPOSE 5000

# Set environment variables (optional)
ENV FLASK_ENV=production

# Command to start the Flask app
CMD ["python", "app.py"]
