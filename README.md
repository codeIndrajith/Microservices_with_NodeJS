# Moleculer Microservice

This repository contains a microservice built with [Moleculer.js](https://moleculer.services/), a progressive microservices framework for Node.js.


## Getting Started

These instructions will help you set up and run the microservice on your local machine for development.

#Project Setup with Three Microservices
 This project consists of three distinct microservices: User Service, Email Service, and Auth Service. Each of these services is designed to be simple and straightforward, to facilitate understanding of how microservices work together. Here’s a brief overview of each   service

1. User Service -Add user email and username. Provides endpoints for initiating user sends.
3. Email Service -Manages email sending functionality. send the email to register user email. Its not use to [Nodemailer](https://nodemailer.com/) or something usable library. Its have very simple process. Provides endpoints for initiating email sends.
4. Auth Service -Its very simple process. check user is admin and password is password. Provides endpoints for authentication-related operations.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository

   ```sh
   https://github.com/your-username/moleculer-microservice.git](https://github.com/codeIndrajith/Microservices_with_NodeJS.git
   cd your_project_folder
   ```

2. Install Dependencies
   ```sh
   npm install
   ```
3. Run the server
   ```
   node server.js
   ```
   
