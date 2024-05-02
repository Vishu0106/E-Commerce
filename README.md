# E-Commerce Website-FrontEnd

This project is a React application created using Vite, Tailwind CSS, Redux Toolkit, and React-Router.

## This Project Live Link - Deployed on Vercel

```bash
   https://e-commerce-lac-zeta.vercel.app/
```

#### As it is Frontend project i have used the below api to get the products details

```bash
https://fakestoreapi.com/products
```
> **Note:** I have used the above API only to get the details of the Product..

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast React build tool
- [React](https://reactjs.org/) - JavaScript library for building UIs
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - Redux state management
- [React-Router-dom](https://reactrouter.com/) - Declarative routing for React

# Website Features

## 1. Signup

- Users can create a new account by providing their email, username, and password.
- Account validation and email verification are implemented for security.

## 2. Login

- Registered users can log in to their accounts using their email and password.
- Email and password validation are done from local storage.

## 3. Cart Management

- Users can add products to their shopping cart.
- Cart functionality includes adding items, removing items, increasing item quantity, and decreasing item quantity.
- Only logged-in users can access the cart.

## 4. Wishlist

- Users can add products to their wishlist for future reference.
- Wishlist management allows users to remove items from their wishlist.
- Wishlist is accessible only to logged-in users.

## 5. Product Categories

- Products are categorized into different categories for easy navigation.
- Category pages display products relevant to each category.

## 6. Checkout Page

- Users can proceed to checkout to complete their purchases.
- Access to the checkout page is restricted to logged-in users.

---

**Note:** For detailed usage please install the project the project on your system using the below Installation instructions


## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Vishu0106/E-Commerce.git
```

2. Navigate to the project directory:

```bash
cd E-Commerce
```

3. Install dependencies using npm or yarn:

```bash
npm install
```

## Running the Development Server

To run the development server locally, use the following command:

```bash
npm run dev
```

The development server will start at `http://localhost:5173` by default.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

The production build will be generated in the `dist` directory.


## Project Folder Structure

```
E-Commerce/
├── public/              # Public assets and index.html
├── src/                 # Source files
│   ├── assets/          # Static assets like images
│   ├── components/      # React components
│   ├── redux/           # Redux store setup
│   ├── config/          # axios config setup
│   ├── config/          # helper methods
|   ├── pages/           # Website pages    
│   ├── App.jsx          # Main App component
│   └── index.jsx        # Entry point
├── .gitignore           # Git ignore file
├── package.json         # npm package file
├── README.md            # Project README
└── tailwind.config.js   # Tailwind CSS configuration
```



           