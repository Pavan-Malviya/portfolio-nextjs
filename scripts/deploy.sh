#!/bin/bash

# Deployment script for production
set -e

echo "🚀 Starting deployment..."

# Build and push Docker image
echo "📦 Building Docker image..."
docker build -t portfolio:latest .

# Tag for registry
docker tag portfolio:latest ghcr.io/username/portfolio:latest

# Push to registry
echo "📤 Pushing to registry..."
docker push ghcr.io/username/portfolio:latest

# Deploy to Kubernetes (if using K8s)
if command -v kubectl &> /dev/null; then
    echo "☸️ Deploying to Kubernetes..."
    kubectl apply -f k8s/
    kubectl rollout status deployment/portfolio-deployment
fi

# Deploy with Docker Compose (alternative)
if [ "$1" = "compose" ]; then
    echo "🐳 Deploying with Docker Compose..."
    docker-compose --profile production up -d
fi

echo "✅ Deployment completed successfully!"
