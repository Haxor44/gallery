pipeline{
    agent any
    tools{
        nodejs 'node'
    }
    stages{
        stage("Clone code"){
            steps{
                git branch:'master', url:'https://github.com/Haxor44/gallery'
            }
        }
        stage("Build Code"){
            steps{
                sh 'npm install'
            }
        }
        stage("Test code"){
            steps{
                sh 'npm test'
            }
        }
        post {
            always {
                echo 'Slack Notifications'
                slackSend (
                    channel:"devops-automation",
                    message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} \n build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                )
            }
        }
    }
}