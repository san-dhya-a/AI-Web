# Project Name: Vibra - Bora Ganhar

# Project overview 
This is a Next.js application utilizing the App Router architecture, styled with Tailwind CSS, and structured for scalability and maintainability.

# 📁 Project Structure

app/
    The core of the application using Next.js App Router. Each folder represents a route.

    home/, login/, register/: Primary user-facing routes.

    minha-conta/: User profile and account management.

    fale-conosco/: Contact support or feedback.

    regulamento/: Terms, conditions, and rules.

    faq/: Frequently asked questions.

    layout.tsx: The root layout shared across all pages.

    globals.css: Global styles and Tailwind directives.

components/

    Reusable UI elements separated by domain.

        ui/: Low-level, generic components (buttons, inputs, modals).Atomic, reusable interface elements.

        auth/: Components specific to login, registration, and session management.

        landing/: Components for the landing page marketing sections.

        layout/: Shared structural components like Headers, Footers, and Sidebars.

        success/: Feedback components for successful operations.

services/

        Logic for handling external data and state.

        api-controller/: Handles HTTP requests and API communication.

        form-controller/: Logic for managing form states and validations (Zod/React Hook Form).

        data-holder/: Context providers or state management logic.

utils/

    General utility functions, constants, and shared TypeScript definitions.


🛠 Tech Stack

    Framework: Next.js (App Router)

    Language: TypeScript

    Styling: Tailwind CSS

    Validation: Zod (noted from tmp_test_zod.js)

📄 Core Configuration Files

        next.config.ts: Next.js specific settings.

        proxy.ts: Configuration for API proxying or redirection.

        tailwind.config.mjs: Custom Tailwind theme and plugins.

        tsconfig.json: TypeScript compiler configuration.

🚀 Getting Started

1.Install dependencies:
    npm install

2.Configure Environment:
    Create a .env file in the root and add your necessary environment variables.

3.Run the development server:
    npm run dev