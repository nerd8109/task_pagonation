-Overview <br>
Developed a high-performance RESTful API and a dynamic React frontend designed to handle large datasets through Server-Side <br>Pagination. Unlike basic client-side slicing, this system ensures minimal memory overhead by fetching only the necessary <br>data "chunks" from the database, making it capable of handling millions of records without performance degradation.
<br><br>
-Key Features <br>
Efficient Data Fetching: Implemented SQL-based LIMIT and OFFSET logic to ensure the backend only processes the specific rows<br> requested by the user.
<br>
-Dynamic UI Components: Built a responsive React interface with real-time state management, allowing users to navigate <br>through thousands of items seamlessly.
<br>
Smart Navigation Logic: Included "First," "Last," "Next," and "Previous" controls with auto-disabling states to prevent<br> invalid API calls.<br>

Loading State Optimization: Integrated a "Skeleton" or "Loader" UI to maintain layout stability and improve perceived <br>performance during network requests.<br><br>

--Technical Stack<br>
Frontend: React.js, Functional Components (Hooks), CSS3 (BEM Methodology).<br>

Backend: Node.js, Express.js.<br>

Database Logic: Relational database optimization (SQL) using pagination queries.<br>

API Design: RESTful architecture with structured JSON responses containing metadata (total count, current page, total pages).<br>
