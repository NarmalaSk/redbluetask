import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import * as docker from "@pulumi/docker";

// Configure the Docker image to build and push to GCR
const imageName = "red-blue-app";
const gcrImageName = `gcr.io/${gcp.config.project}/${imageName}:latest`;

// Build the Docker image
const appImage = new docker.Image(imageName, {
    build: "./",  // Path to your project directory where the Dockerfile is
    imageName: gcrImageName,
    skipPush: false,  // Set to false to push the image to GCR
});

// Deploy to Google Cloud Run
const appService = new gcp.cloudrun.Service("red-blue-app", {
    location: "us-central1", // Choose your region
    template: {
        spec: {
            containers: [{
                image: appImage.imageName,
                envs: [
                    { name: "REDIS_HOST", value: "redis-hostname" },  // Add any necessary environment variables here
                    { name: "REDIS_PORT", value: "6379" },
                    { name: "MONGO_URI", value: process.env.MONGO_URI || "your-mongodb-connection-string" },  // Add MongoDB connection string here
                ],
            }],
        },
    },
});

// Output the Cloud Run URL
export const url = appService.statuses[0].url;
