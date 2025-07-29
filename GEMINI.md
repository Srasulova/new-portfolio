
# Gemini Code Assistant Context

This document provides context for the Gemini Code Assistant to understand the project structure, conventions, and goals.

## Project Overview

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The main purpose of this project is to showcase my skills, experience, and projects to potential employers and collaborators.

## Project Structure

The project is a standard Next.js application with the `src` directory.

- `src/app/`: Contains the main application logic, including pages, components, and styles.
  - `page.tsx`: The main page of the application, which renders different sections based on user interaction.
  - `components/`: Contains reusable React components used throughout the application.
  - `projects.ts`: An array of project objects, each containing details about a project.
  - `types.ts`: Defines TypeScript types used in the application.
- `public/`: Contains static assets like images and fonts.
- `package.json`: Defines project dependencies and scripts.
- `next.config.ts`: Configuration file for Next.js.
- `tailwind.config.ts`: Configuration file for Tailwind CSS.

## Key Technologies

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Typed superset of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **React**: JavaScript library for building user interfaces.

## Development Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase for errors.

## Coding Style and Conventions

- The project uses functional components with hooks.
- Styling is done using Tailwind CSS utility classes.
- TypeScript is used for type safety.
- The code is formatted using Prettier (implied by `.eslintrc.json`).

## Project Goals

- Showcase my skills and experience in a visually appealing and interactive way.
- Provide a clear and concise overview of my projects, with links to live demos and source code.
- Make it easy for potential employers to contact me.
