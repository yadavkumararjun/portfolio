#!/bin/bash

# Portfolio Setup and Deployment Script
# This script helps set up and deploy the portfolio to GitHub Pages

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}Arjun Kumar Yadav Portfolio Setup${NC}"
echo -e "${BLUE}==================================${NC}\n"

# Step 1: Install dependencies
echo -e "${YELLOW}Step 1: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}\n"

# Step 2: Type checking
echo -e "${YELLOW}Step 2: Running type checks...${NC}"
npm run type-check
echo -e "${GREEN}✓ Type checking passed${NC}\n"

# Step 3: Linting
echo -e "${YELLOW}Step 3: Running linter...${NC}"
npm run lint || echo -e "${YELLOW}⚠ Some lint warnings (review if needed)${NC}\n"

# Step 4: Build
echo -e "${YELLOW}Step 4: Building for production...${NC}"
npm run build
echo -e "${GREEN}✓ Build completed${NC}\n"

# Step 5: Success message
echo -e "${GREEN}==================================${NC}"
echo -e "${GREEN}Portfolio is ready to deploy!${NC}"
echo -e "${GREEN}==================================${NC}\n"

echo -e "${BLUE}Next steps:${NC}"
echo "1. Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy updated portfolio'"
echo "   git push origin main"
echo -e "\n2. The GitHub Actions workflow will automatically:"
echo "   - Run tests and build"
echo "   - Deploy to GitHub Pages"
echo "   - Make it live at: https://arjunky.github.io/portfolio"
echo -e "\n3. Verify deployment:"
echo "   - Check GitHub Actions tab for workflow status"
echo "   - Visit the site URL once deployment completes"
echo ""
echo -e "${YELLOW}For local testing:${NC}"
echo "npm run dev     # Start development server"
echo "npm run preview # Preview production build"
