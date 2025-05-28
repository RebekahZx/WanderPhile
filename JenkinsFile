pipeline {
    agent any

    environment {
        IMAGE_NAME = 'rebekahz/airbnb-clone'
        CONTAINER_NAME = 'airbnb-clone'
        PORT = '8080'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Code Quality - Lint') {
            steps {
                bat 'npx eslint . || echo "Linting errors found"'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'npm audit || echo "Audit issues found"'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Run Docker Container') {
            steps {
                bat "docker run -d -p %PORT%:8080 --name %CONTAINER_NAME% %IMAGE_NAME%"
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-token', variable: 'DOCKER_TOKEN')]) {
                    bat '''
                    echo %DOCKER_TOKEN% | docker login -u rebekahz --password-stdin
                    docker push %IMAGE_NAME%
                    '''
                }
            }
        }
    }

    post {
        always {
            bat 'docker stop %CONTAINER_NAME% || echo "Container not running"'
            bat 'docker rm %CONTAINER_NAME% || echo "Container not found"'
        }
    }
}
