pipeline{
    agent any
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
}