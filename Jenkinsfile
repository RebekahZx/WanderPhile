pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "rebekahz/wanderlust"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing Node.js dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo '🛠️ Building the application...'
                // If you have a build step (like webpack), include it here
                // If not, just use Docker build
                bat 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Test') {
            steps {
                echo '✅ Running tests...'
                sh 'npm test'
            }
        }

        // OPTIONAL: Uncomment to use ESLint for Code Quality
        /*
        stage('Code Quality') {
            steps {
                echo '🔍 Checking code quality with ESLint...'
                sh 'npx eslint .'
            }
        }
        */

        // OPTIONAL: Uncomment for Security Scanning
        /*
        stage('Security') {
            steps {
                echo '🛡️ Running security audit...'
                sh 'npm audit'
            }
        }
        */

        stage('Deploy to Staging') {
            steps {
                echo '🚀 Deploying Docker container to staging...'
                sh 'docker run -d -p 8080:8080 $DOCKER_IMAGE'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs.'
        }
    }
}
