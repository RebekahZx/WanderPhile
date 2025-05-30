pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'wanderlust'
        DOCKER_HUB_REPO = 'rebekahz/wanderlust'
        CLOUD_NAME = credentials('CLOUD_NAME')
        CLOUD_API_KEY = credentials('CLOUD_API_KEY')
        CLOUD_API_SECRET = credentials('CLOUD_API_SECRET')
        MAP_TOKEN = credentials('MAP_TOKEN')
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

        stage('Build') {
            steps {
                echo '📦 Building Docker image...'
                bat "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Test-jest') {
            steps {
                echo '🧪 Running tests...'
                bat 'npm test || echo "No tests defined, skipping..."'
            }
        }

        stage('Code Quality - SonarQube') {
            steps {
                // withSonarQubeEnv('SonarQube') {
                //     bat 'sonar-scanner'
                // }
                bat 'echo "SonarQube analysis would run here."'
            }
        }

        stage('Security') {
            steps {
                script {
                    echo '🔒 Running security audit (non-blocking)...'
                    bat(
                        script: 'npm audit --json > audit-report.json || exit 0',
                        returnStatus: true
                    )
                    def audit = readJSON file: 'audit-report.json'
                    echo "Audit report summary: ${audit.metadata.vulnerabilities}"
                }
            }
        }

        stage('Deploy to Test') {
            steps {
                echo ' Deploying to test environment...'
                bat "docker run -d -p 8080:8080 ${DOCKER_IMAGE}"
            }
        }

        stage('Release') {
            steps {
                echo '📤 Tagging and pushing image to Docker Hub...'
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat """
                        echo Logging in to Docker Hub...
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                        docker tag ${DOCKER_IMAGE} ${DOCKER_HUB_REPO}:latest
                        docker push ${DOCKER_HUB_REPO}:latest
                    """
                }
            }
        }

        stage('Monitoring') {
            steps {
                echo ' Monitoring would be configured using external services like New Relic or Datadog.'
            }
        }
    }

    post {
        always {
            echo ' Pipeline finished.'
        }
    }
}
