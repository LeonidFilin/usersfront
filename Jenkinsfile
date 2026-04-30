pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Frontend') {
            steps {
                dir('front/usersfront') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('front/usersfront') {
                    bat 'npm run build'
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('web') {
                    bat 'npm install'
                }
            }
        }

        stage('Docker Compose Build') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Docker Compose Up') {
            steps {
                bat 'docker compose up -d'
            }
        }
    }
}