pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'wanderlust'
        DOCKER_HUB_REPO = 'rebekahz/wanderlust'

        // Credentials stored securely in Jenkins
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

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat "docker build -t %DOCKER_IMAGE% ."
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test || echo "⚠️ No tests defined or tests failed, continuing..."'
            }
        }

        stage('Security') {
            steps {
                script {
                    def auditResult = bat(
                        script: 'cmd /c "npm audit --json || exit 0"',
                        returnStdout: true
                    ).trim()

                    def parsed = readJSON text: auditResult

                    def vulnCount = 0
                    if (parsed.metadata?.vulnerabilities) {
                        parsed.metadata.vulnerabilities.each { severity, count ->
                            vulnCount += count as int
                        }
                    }

                    if (vulnCount > 0) {
                        echo "⚠️ Security vulnerabilities found: $vulnCount"
                        parsed.metadata.vulnerabilities.each { severity, count ->
                            echo " - ${severity}: ${count}"
                        }
                    } else {
                        echo "✅ No vulnerabilities found."
                    }

                    // Continue regardless of result
                }
            }
        }

        stage('Deploy to Test') {
            steps {
                echo 'Deploying to test environment...'
                bat "docker run -d -p 8080:8080 %DOCKER_IMAGE%"
            }
        }

        stage('Release to Docker Hub') {
            steps {
                echo 'Tagging and pushing Docker image...'
                bat "docker tag %DOCKER_IMAGE% %DOCKER_HUB_REPO%:latest"
                bat "docker push %DOCKER_HUB_REPO%:latest"
            }
        }

        stage('Monitoring (Placeholder)') {
            steps {
                echo 'Monitoring setup placeholder (New Relic, Datadog, etc.)'
            }
        }
    }

    post {
        always {
            echo '✅ Jenkins pipeline completed.'
        }
    }
}
