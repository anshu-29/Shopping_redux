# UltraShop - Shopping Web App



UltraShop is a shopping web application built using React, Redux, Axios, and Redux Thunk. It allows users to browse and view a wide range of products. The app leverages the Redux state management to efficiently handle the product data fetched from an external API.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Redux Store](#redux-store)
- [Components](#components)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of available products
- Click on a product to view detailed information
- Filter products by category or price range
- Add products to the shopping cart
- Checkout and place orders

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/UltraShop.git
```

2. Navigate to the project directory:

```bash
cd UltraShop
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your web browser and go to `http://localhost:3000` to access UltraShop.

## Technologies Used

- React
- Redux (Redux Toolkit)
- Axios
- Redux Thunk
- React Router DOM
- Semantic UI (or any other styling framework)
- ES6+

## API Integration

UltraShop integrates with an external API to fetch product data. The API provides product details such as name, price, category, and images. The Redux Thunk middleware is used to handle asynchronous API calls.

## Redux Store

The Redux store is structured to manage the application's state efficiently. It includes the following slices:

- `productReducer`: Handles the product data fetched from the API and stores it in the `products` state array.

- `selectedProductReducer`: Manages the currently selected product data when a user clicks on a product card.

- `cartReducer`: Keeps track of the items added to the shopping cart.

## Components

UltraShop is composed of several components that work together to create the user interface and manage application logic:

- `ProductListing`: Renders a grid of product cards using the `ProductComponent`. Fetches product data from the API using Redux Thunk.

- `ProductComponent`: Displays individual product cards with details such as name, price, category, and image. Used in `ProductListing`.

- `ProductDetails`: Shows detailed information about a selected product when clicked on a product card.

- `Cart`: Displays the items in the shopping cart with the ability to update quantities and proceed to checkout.

## Screenshots

Include screenshots or GIFs showcasing the application's UI and its key features.

## Contributing

Contributions to UltraShop are welcome! If you find any bugs or want to add new features, please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Submit a pull request.

## License

UltraShop is released under the MIT License. See [LICENSE](LICENSE) for more details.
