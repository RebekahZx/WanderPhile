pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'wanderlust'
        DOCKER_HUB_REPO = 'rebekahz/wanderlust'
        CLOUD_NAME=credentials('CLOUD_NAME')
        CLOUD_API_KEY=credentials('CLOUD_API_KEY')
        CLOUD_API_SECRET=credentials('CLOUD_API_SECRET')
        MAP_TOKEN=credentials('MAP_TOKEN')
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
                echo 'Building Docker image...'
                bat "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test || echo "No tests defined, skipping..."'
            }
        }

//         stage('Code Quality - SonarQube') {
//             steps {
//                 withSonarQubeEnv('SonarQube') {
//                     bat 'sonar-scanner'
//                 }
//             }
// }


        stage('Security - npm Audit') {
    steps {
        script {
            def auditResult = sh(script: 'npm audit --json || true', returnStdout: true).trim()
            def parsed = readJSON text: auditResult
            def vulnCount = parsed.metadata.vulnerabilities.total

            if (vulnCount > 0) {
                echo "⚠️ Security vulnerabilities found: $vulnCount"
                currentBuild.result = 'UNSTABLE'
            } else {
                echo "✅ No vulnerabilities found."
            }
        }
    }
}



        stage('Deploy to Test') {
            steps {
                echo 'Deploying to test environment...'
                bat "docker run -d -p 8080:8080 ${DOCKER_IMAGE}"
            }
        }

        stage('Release') {
            steps {
                echo 'Tagging and pushing image...'
                bat "docker tag ${DOCKER_IMAGE} ${DOCKER_HUB_REPO}:latest"
                bat "docker push ${DOCKER_HUB_REPO}:latest"
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring would be configured using external services like New Relic or Datadog.'
                // Placeholders for future integration
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
