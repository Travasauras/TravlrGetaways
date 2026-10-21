Travlr Getaways - Full Stack Web Application

Overview 
This full stack web app uses the MEAN stack.  It provides a customer facing website
for viewing avaialable trips and an admin SPA for managing trip listings.

Architecture
The project uses three front end approaches.  It started as static HTML pages served by Express.  I then converted those pages to Handlebars templets allowing express to build each page on the server from JSON data with a shared header and footer as partials.  
The SPA was built with Angular.  It loads once, and swaps views with its router without reloading, building pages in the browser from JSON returned by the API.  That makes it responsive and keeps it separate from the backend, but adds complexity to the project. 

The backend uses MongoDB as that stores JSON-like documents.  Trip data has almost the same shape in the database as it does in the API response so no translation layer is needed.

Functionality
JavaScript is the programming language, and JSON is the text format used for data based on JavaScript object syntax with no function or logic readable by any language.  JSON connects the stack, MongoDB documents are sent as JSON by the Epress API, displayed by both the customer and admin frontends, admin forms send JSON back to create and update trips. 

Refactoring throughout the project helped improve functionality and made the code easier to manage. I replaced static pages with dynamic templates, connected both sides of the application to the same REST API, and organized HTTP requests into an Angular service. Reusable components, like the trip cards, reduced repeated code and made updates and testing easier.

Testing
I tested the API endpoints using Postman to make sure GET, POST, PUT, and DELETE requests worked properly. I checked responses, errors, and verified changes in MongoDB. Adding JWT authentication made testing more complicated because protected requests required a valid token, which also had to be tested after expiration.

Reflection
This project has helped me gain some practice in building a full stack web app with technologies still used today.  I know the purpose in school is to teach these concepts rather than provide the repetition for mastering these concepts, but this course focused more on building an actual full stack site rather than writing papers about it, which is very much appreciated as hands-on experience is necessary if technical interviews are to be LeetCode style.  Practice in this course will help me in my goal of being a better full stack developer. 
