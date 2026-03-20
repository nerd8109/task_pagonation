Project Title: React Product Pagination <br>
Description: A lightweight, responsive React application that demonstrates efficient server-side data fetching and pagination. The project retrieves and displays a paginated inventory of products using the public DummyJSON API. It ensures an optimal user experience by implementing loading states and strict boundary controls for navigation.

Key Features:<br>

Server-Side Pagination: Dynamically calculates API skip and limit parameters to only load the data required for the current page, reducing network payload and improving performance.
State Management: Utilizes React Hooks (useState and useEffect) to manage item data, loading states, current page tracking, and total page calculations.
Resilient UI Controls: "Previous" and "Next" navigation buttons are automatically disabled during data fetches or when the user reaches the absolute first or last pages, preventing broken API calls.
Loading Feedback: Displays a clear loading indicator to the user while asynchronous API requests are being processed.
Tech Stack:<br>

Frontend Framework: React.js (Functional Components, Hooks)
Styling: Vanilla CSS
Data Fetching: Native JavaScript fetch API
External API: DummyJSON (https://dummyjson.com/products)
