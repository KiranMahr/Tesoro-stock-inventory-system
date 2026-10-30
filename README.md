# Tesoro  — Inventory Management Dashboard

Tesoro Jewels is a React based jewelry inventory management dashboard
developed using Vite. It allows users to manage jewelry products,
monitor stock levels and maintain an activity log.


##  Project Overview

The dashboard demonstrates component based architecture, reusable
React components, props, state management, lifecycle methods, JSX,
event handling and React Hooks.

### Key Features

- Add and remove jewelry products.
- Display product prices and stock quantities.
- Identify in-stock, low-stock and out-of-stock products.
- Display total inventory count and low-stock warnings.
- Maintain activity logs with date and time.
- Support light and dark themes.
- Store inventory data locally in the browser.


##  Rendering Architecture: CSR vs. SSR

### 1. Client-Side Rendering (CSR)

Client Side Rendering is commonly used in standard Vite and React
single page applications. The browser initially receives an HTML
document containing references to JavaScript and CSS resources.
React executes in the browser and renders the user interface.

After the application loads interactions such as adding products,
removing items and filtering inventory can update the interface
without reloading the entire page. CSR simplifies deployment because
the application can be hosted on static hosting services or a
content delivery network. However, the initial page may take longer
to become interactive while JavaScript downloads and executes.
Search engines can index JavaScript rendered content but indexing
may require additional processing.

### 2. Server-Side Rendering (SSR)

Server Side Rendering is supported by Next.js frameworks.
The server generates HTML for a request and sends rendered content
to the browser. This can make meaningful page content visible
before all client side JavaScript finishes loading. React can then
hydrate the HTML to enable interactive features.

SSR can improve initial content visibility and support search engine
optimization for public product pages. However, it introduces
server side execution, additional deployment complexity and
potentially higher hosting costs. Performance depends on server
response times, caching and application design.

### 3. CSR vs. SSR Comparison

| Aspect | CSR | SSR |
|---|---|---|
| Initial rendering | Browser renders UI | Server generates HTML |
| Interactivity | After JavaScript loads | After hydration |
| Performance | Efficient after initial load | Can improve initial content display |
| SEO | Requires consideration for indexing | HTML content is readily available |
| Hosting | Simple static hosting | Server-capable or managed hosting |
| Best suited for | Interactive private dashboards | Public, searchable storefronts |

### 4. Conclusion

For Tesoro Jewels, CSR is suitable because inventory management
requires frequent user interactions and authenticated access.
SSR may be more appropriate if the project expands into a public
e-commerce storefront where search visibility and fast initial
content display are important. An enterprise application can also
combine rendering strategies to balance interactivity, performance,
SEO, security and hosting costs.


##  Technologies Used

- React
- Vite
- JavaScript
- JSX
- CSS
- Browser Local Storage



### Prerequisites

Install Node.js and npm before running the project.

### Installation

Clone the repository and open its directory:

    git clone YOUR_GITHUB_REPOSITORY_URL
    cd ecommerce-inventory

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open the local URL displayed in the terminal.


## Project Purpose

This project was developed to demonstrate core Web Engineering
concepts through a practical React inventory management application.
