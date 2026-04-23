# Gym Manager App — Next.js Frontend

A Next.js web application for managing gym memberships with Google OAuth login.

## Setup Instructions

1. Clone the repository
   git clone https://github.com/YOUR_USERNAME/my-gym-app.git
   cd my-gym-app

2. Install dependencies
   npm install

3. Create environment file
   Create a .env.local file in the root folder and add:
   NEXT_PUBLIC_API_URL=https://backend.membes.store

4. Run the development server
   npm run dev

5. Open browser and go to:
   http://localhost:3000

## Environment Variables

| Variable | Value |
|---|---|
| NEXT_PUBLIC_API_URL | https://backend.membes.store |

## Architecture Overview

| Folder | Purpose |
|---|---|
| app/login | Login page with Google OAuth |
| app/splash | Reads localStorage and routes user |
| app/manager | Handles Google redirect, saves userID |
| app/create-profile | Profile creation form |
| app/dashboard | Main dashboard after login |
| api/auth.ts | Google login redirect function |
| api/profile.ts | GET and PATCH profile API calls |
| utils/storage.ts | localStorage helper functions |
| utils/routing.ts | Routing logic based on localStorage |
| __tests__ | All unit and integration tests |

## Running Tests

npm test

## Tech Stack

- Next.js 14 App Router
- TypeScript
- localStorage for state persistence
- fetch for API calls