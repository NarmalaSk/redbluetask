# Red Blue App - Color Limit Checking Application

The **Red Blue App** is a color limit checking application built with the **Express.js Framework** and deployed on **Google Cloud Run**. It uses **Node.js**, **Docker**, **Redis**, and **MongoDB** to provide scalable rate-limiting functionality for button clicks.

## Technologies Used

- **Express.js**: Web framework for Node.js
- **Node.js**: JavaScript runtime for building server-side applications
- **Docker**: Containerization for deploying the app
- **Redis**: In-memory data store for rate limiting
- **MongoDB**: Database for storing button click data
- **Pulumi**: Infrastructure as Code (IaC) for deploying the app to Google Cloud

---

## Steps to Setup the App in Local Environment

### 1. Clone the Repository

Clone this repository to your local machine:

bash
git clone https://github.com/your-repo-link
cd red-blue-app
2. Install Dependencies
Run the following command to initialize the project and install necessary dependencies:

bash
Copy code
npm init -y
npm install
3. Create Environment Variables
Create a .env file and set the following environment variables:

bash
Copy code
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mydatabase
REDIS_HOST=localhost
REDIS_PORT=6379
PORT=8080
This will ensure that the app can connect to MongoDB and Redis with the correct configurations.

4. Start the Server Locally
To run the app locally, use the following command:

bash
Copy code
node server.js
Your app will be available at http://localhost:8080.

Steps to Setup the App in Google Cloud
1. Create a Google Cloud Account
If you don't already have one, create a Google Cloud Free Trial Account. Once done, configure the Google Cloud SDK by following the official Google Cloud SDK Installation Guide.

2. Authenticate the Google Cloud SDK
Authenticate the Google Cloud SDK with your account:

bash
Copy code
gcloud auth login
3. Set Up Google Cloud Project
Create and set your Google Cloud project:

bash
Copy code
gcloud config set project YOUR_PROJECT_ID
4. Run the Pulumi Script to Deploy the App
Pulumi is used to deploy the app from the source repository to Google Cloud Run. Follow these steps:

Install Pulumi: Pulumi Installation Guide

Set up Pulumi:

bash
Copy code
pulumi login
Deploy the app to Google Cloud Run:
bash
Copy code
pulumi up
This will deploy the app and give you a URL to access it.

Congratulations! 🎉🎉
