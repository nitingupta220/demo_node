pipeline{
    agent any
    tools {nodejs "node"}
    stages{
        stage("Git Checkout"){
            steps{
                echo "Checking out from Github"
                git credentialsId: '4d7078da-78cf-4cc5-9111-003196355f4d', url: 'https://github.com/nitingupta220/demo_node.git'
            }   
        }
        stage("Running index.js"){
            steps{
                echo "Running index.js now"
                sh "node index.js"
            }   
        }
        stage("Running next.js"){
            steps{
                echo "Running next.js now"
                sh "node next.js"
            }   
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}