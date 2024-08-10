# Product Listing App

A React Native application built with Expo and `expo-router` for managing a product listing. The app allows users to view products, view product details, and manage authentication.

## Features

- **Authentication**: Users can register, log in, and log out.
- **Product Listing**: Displays a list of products fetched from a Dummy JSON API.
- **Product Details**: View detailed information about a selected product.
- **Favorites**: Add products to favorites and view them.

## Getting Started

### Prerequisites

- Node.js (preferably the latest LTS version)
- Expo CLI: Install it globally with `npm install -g expo-cli`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ini10000/product-listing-app.git
   cd product-listing-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npx expo start
```

This will open a new tab in your default web browser with the Expo DevTools. You can scan the QR code with the Expo Go app on your mobile device or use an emulator.

### Directory Structure

- **`/app`**: Contains all screens and routing files.
  - **`index.tsx`**: Main entry point.
  - **`login.tsx`**: Login screen.
  - **`register.tsx`**: Registration screen.
  - **`products.tsx`**: Product listing screen.
  - **`product-details.tsx`**: Product details screen.
- **`/assets`**: Contains images and other static assets.
- **`/src`**: Source directory for components and styles.
  - **`/api`**: Contains API utility functions.
  - **`/components`**: Reusable components like `ProductCard` and `Loader`.
  - **`/styles`**: Style definitions.

### API Integration

The app uses the Dummy JSON API for fetching product data. The endpoint is:

```
https://dummyjson.com/products
```

### Authentication

User authentication data is stored locally using `AsyncStorage`.

### Types

TypeScript is used for type safety. The application uses types for props and state management to ensure code reliability.

### Troubleshooting

If you encounter issues running the app, ensure you have the correct versions of Node.js and Expo CLI. Refer to the [Expo documentation](https://docs.expo.dev) for additional help.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` based on your project's specifics and preferences. If you have additional features or sections to include, you can easily modify this template.
