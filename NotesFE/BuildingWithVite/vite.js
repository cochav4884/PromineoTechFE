// Note: You need to run `npm install` in the `BuildingWithVite` folder first to install Vite.
// // You need to run this command in an interactive terminal. Git Bash is not an interactive terminal. Use PowerShell or Command Prompt instead.
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', // Ensure the base path is correct for deployment
    server: {
        port: 3000, // You can change the port if needed
        open: true, // Open the browser when the server starts
    },
    build: {
        outDir: 'dist', // Specify the output directory for the build
    },
    })

// This is a basic Vite configuration file. You can customize it further based on your project's needs.

// how to install Vite:
// 1. Open your terminal.
// 2. Navigate to your project directory (BuildingWithVite).
// 3. Run the following command to install Vite:
//    npm create vite@latest
// 4. Follow the prompts to set up your project: You can choose a framework like vanilla, vue, react, etc. // Choose "vanilla" for a basic JavaScript setup or any other framework you prefer.
// 5. Select a variant: You can choose between JavaScript or TypeScript. For this example, select "TypeScript".
// 6. Done. Now run:
// cd vite-project-name // Replace with the actual name of your Vite project folder created in step 4.
// 7. Now run the following command to install dependencies:
//    npm install
// 8. After the installation is complete, you can start the development server by running:
//    npm run dev
