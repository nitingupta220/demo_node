pipeline{
    agent any
    tools {nodejs "node"}
    stages{
        stage("Get code from Github"){
            steps{
                echo "Checking out code from Github"
                git credentialsId: '93ec7f6f-b18b-4480-9c98-526a3559542c', url: 'https://github.com/nitingupta220/demo_node.git'
            }
        }
        stage("Install the dependencies"){
            steps{
                sh "npm ci"
            }
        }
        // stage("Run tests") {
        //     steps{
        //         sh "./script/test"
        //     }
        // }
        stage("Run Deploy") {
            steps{
                sh "./script/deploy"
            }
        }
    }
}