<h1 style='text-align: center;'>WaffleDrive</h1>

## Overview

WaffleDrive is a simple file storage platform built using Express, Postgres and Supabase. It allows the creation of folders for easier file management.

This project was built to practice full-stack web development, applying user authentication, database management and cloud storage integration, deploying on cloud platforms.

## Features

- **User Authentication**: Secure login, only you have access to your own files and folders
- **File Management**: Upload and organize your files using folders
- **Cloud Storage**: Uploaded files are stored in the cloud and can be downloaded anytime

## Tech Stack

- Javascript
- PostgreSQL
- Express: Fast, unopinionated, minimalist web framework for Node.js
- Embedded JavaScript templates (EJS) - A simple templating language that allows you to generate HTML markup with plain JavaScript
- Passport: Express-compatible authentication middleware for Node.js
- Prisma ORM: Node.js and TypeScript ORM that provides type-safe database access, migrations and a visual data editor
- Supabase-js: Supabase JS client library for interacting with Postgres databases in Supabase

## Getting started

To get a local copy of this project up and running, follow these steps

### Prequisites

- Node.js
- Npm
- Supabase
- PostgreSQL

## Installation

1. **Clone the repository**

```bash
git clone git@github.com:csdropout/file-uploader.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file and add your environment variables**

```env
DATABASE_URL=your_postgres_connection
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
SUPABASE_BUCKET=your_supabase_bucket
```

4. **Run database migrations:**

```bash
npx prisma migrate dev
```

5. **Start the development server**

```bash
node app.js
```
