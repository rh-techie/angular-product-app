
## **Features**

1. **Product List Page:** Displays a list of 100+ products dynamically generated with names, prices, and descriptions. Each product has a "View Details" button that navigates to its detailed page.
2. **Product Detail Page:** Displays detailed information about a selected product, with a "Back to Product List" button for easy navigation.
3. **Responsive Design:** Styled using Bootstrap for a clean and responsive layout.

---

## **How to Run the Project Locally**

Follow the steps below to set up and run the project:

1. **Install Dependencies**

   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```
2. **Run the Development Server**

   Start the Angular development server:

   ```bash
   npm run start
   ```
3. **Open the Application**

   Open your browser and navigate to:

   ```bash
   http://localhost:4200
   ```

---

## **Page Summaries**

### 1. **Product List Page**

-   **Path:** `/products`
-   Displays a list of all products with the following information:
    -   Product name
    -   Price
    -   Description
-   Each product includes a "View Details" button that navigates to the Product Detail Page for that product.

### 2. **Product Detail Page**

-   **Path:** `/products/:id`
-   Displays detailed information about a selected product, including:
    -   Product name
    -   Price
    -   Description
-   Includes a "Back to Product List" button to navigate back to the Product List Page.

