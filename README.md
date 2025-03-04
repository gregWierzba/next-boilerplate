# Next.js Boilerplate

## Project Overview and Purpose

This is a Next.js boilerplate project designed to provide a solid foundation for building modern web applications. It comes pre-configured with essential tools and best practices to streamline development and ensure code quality.

## Prerequisites and System Requirements

- [Bun](https://bun.sh/) (latest version)
- Node.js (version 18 or later recommended)
- A modern web browser

## Installation Instructions

1. Clone the repository:

    ```
    git clone https://github.com/your-username/next-boilerplate.git
    cd next-boilerplate
    ```

2. Install dependencies:
    ```
    bun install
    ```

## Configuration Steps

1. Environment Variables: Copy `.env.example` to `.env.local` and adjust the variables as needed.
2. Customize `next.config.ts` for any Next.js specific configurations.
3. Adjust `tailwind.config.ts` for Tailwind CSS customizations.
4. Modify `postcss.config.mjs` if you need to add or remove PostCSS plugins.

## Usage Guide for Installed Tools

### Next.js

- Description: React framework for production-grade applications.
- Basic commands:
    - `bun run dev`: Start the development server
    - `bun run build`: Build the application for production
    - `bun run start`: Start the production server
- Best practices:
    - Use Static Generation whenever possible
    - Implement dynamic imports for code splitting

### ESLint

- Description: Static code analysis tool for identifying problematic patterns.
- Basic commands:
    - `bun run lint`: Run ESLint on the project
- Best practices:
    - Address all ESLint warnings and errors before committing

### Prettier

- Description: Code formatter to ensure consistent code style.
- Basic commands:
    - `bun run lint:fix`: Run Prettier to format all files
- Best practices:
    - Use Prettier integration in your IDE for real-time formatting

### Jest

- Description: JavaScript testing framework.
- Basic commands:
    - `npm run test`: Run all tests
      WARNING: Jest is not yet fully integrated with Bun. Use `npm run test` instead of `bun run test`.
- Best practices:
    - Write tests for all new features and bug fixes
    - Aim for high test coverage

### Husky

- Description: Git hooks made easy.
- Usage: Automatically set up by the `prepare` script
- Best practices:
    - Use pre-commit hooks to run linters and tests

### TailwindCSS

- Description: Utility-first CSS framework.
- Usage: Add Tailwind classes directly in your JSX
- Best practices:
    - Utilize Tailwind's responsive design utilities
    - Customize the theme in `tailwind.config.ts`

### Capacitor

- Description: Cross-platform native runtime for building web apps that run natively on iOS, Android, and the Web. Capacitor allows you to convert your Next.js application into a mobile app.
- Basic commands:
    - `bun run build`: Build the Next.js application for production (creates the 'out' directory)
    - `bunx --bun cap add android`: Add Android platform to your project
    - `bunx --bun cap add ios`: Add iOS platform to your project
    - `bunx --bun cap sync`: Sync web assets to native projects and update native plugins
    - `bunx --bun cap open android`: Open Android project in Android Studio
    - `bunx --bun cap open ios`: Open iOS project in Xcode
    - `bunx --bun cap run android`: Build and run the app on an Android device or emulator
    - `bunx --bun cap run ios`: Build and run the app on an iOS device or simulator

## Project Structure

```
next-boilerplate/
├── .husky/            # Husky git hooks
├── public/            # Static files
├── src/
│   ├── app/           # App Router pages and layouts
│   ├── components/    # React components
│   │   └── ui/        # UI components
│   └── lib/           # Utility functions
├── .gitignore         # Git ignore file
├── .prettierrc        # Prettier configuration
├── bun.lock           # Bun lock file
├── components.json    # UI components configuration
├── eslint.config.mjs  # ESLint configuration
├── jest.config.ts     # Jest configuration
├── jest.setup.ts      # Jest setup file
├── next.config.ts     # Next.js configuration
├── package.json       # Project dependencies and scripts
├── postcss.config.mjs # PostCSS configuration
├── README.md          # Project documentation
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization Options

- Modify `tailwind.config.ts` to customize the design system
- Adjust ESLint rules in `eslint.config.mjs`
- Customize Prettier settings in `.prettierrc`
- Modify Jest configuration in `jest.config.ts`
- Configure UI components in `components.json`

## Troubleshooting Tips

- Clear `.next` cache: `rm -rf .next`
- Ensure all dependencies are up to date: `bun install`
- Check for conflicting ESLint rules
- Verify that all required environment variables are set

## Contributing Guidelines

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License Information

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments and Credits

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Husky](https://typicode.github.io/husky/)
- [Bun](https://bun.sh/)

Thank you to all the developers and maintainers of these amazing tools and libraries.
