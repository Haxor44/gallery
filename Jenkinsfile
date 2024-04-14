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

    }

    try{

            stage("Test code"){
                steps{
                    sh 'np tst'
                }
            }
        } catch (err){
            emailext body: "${err}", subject: "Error when testing", to:"evolmalek04@gmail.com"
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