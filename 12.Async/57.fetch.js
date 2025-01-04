// Fetch API in JavaScript:

// 1. `fetch` is a built-in JavaScript function used to make HTTP requests to a server and fetch data.
// 2. It works asynchronously and returns a Promise.
// 3. Fetch is primarily used to get data from APIs (REST or SOAP) or servers.

// API (Application Programming Interface):
// - Acts as a bridge to enable communication between different systems or applications.
// - APIs allow the client (frontend) to send requests to the server (backend) and receive responses.

// REST API (Representational State Transfer):
// - A popular architecture for APIs where data is transferred in a structured manner, often using JSON.
// - Example methods: GET (retrieve), POST (send), PUT (update), DELETE (remove).

// JSON (JavaScript Object Notation):
// - A lightweight data-interchange format used to transfer data between client and server.
// - It is easy to parse (convert JSON to a JavaScript object) and stringify (convert JavaScript objects to JSON).

// XML (Extensible Markup Language):
// - Another format used for data transfer, often less preferred than JSON due to its verbosity.

// Fetch example with `.then()` chaining:
fetch("https://fakestoreapi.com/users") // Making a GET request to the API endpoint.
    .then((response) => {
        // Check if the response status is okay (200–299).
        if (!response.ok) {
            throw new Error("Data not found"); // Throw an error if the response is not okay.
        }
        return response.json(); // Parse the JSON response to a JavaScript object.
    })
    .then((data) => {
        console.log(data); // Log the retrieved data.
    })
    .catch((error) => {
        console.log(error.message); // Log any errors that occur during the fetch process.
    });

// Explanation of `.then()` chaining:
// 1. The first `.then()` handles the response object and checks if the request was successful (`response.ok`).
// 2. The second `.then()` processes the parsed JSON data.
// 3. The `.catch()` handles errors in the fetch operation or JSON parsing.

// Fetch example with `async/await`:
async function fetchData() {
    try {
        // Making a GET request to a specific user endpoint.
        let response = await fetch("https://fakestoreapi.com/users/1", {
            method: "GET",
        });

        // Check if the response is okay.
        if (!response.ok) {
            throw new Error("Data not found"); // Throw an error if the request fails.
        }

        // Parse the response JSON into a JavaScript object.
        let data = await response.json();

        // Log the fetched data to the console.
        console.log(data);
    } catch (error) {
        // Catch and handle any errors that occur during the fetch or JSON parsing.
        console.log(error.message);
    }
}

// Calling the asynchronous function to fetch data.
fetchData(); // Logs data for the user with ID 1.

// Explanation of `async/await` version:
// 1. `async` keyword defines an asynchronous function.
// 2. `await` pauses the function execution until the Promise is resolved or rejected.
// 3. Errors are handled using `try...catch` for better readability compared to `.then()` and `.catch()` chaining.
// 4. The fetch logic remains the same; the structure of the code is cleaner.

// Execution Flow:
// - The `.then()` version uses method chaining to handle the fetch Promise.
// - The `async/await` version simplifies the flow with a synchronous-like structure.

// Key Points to Remember:
// - Always check `response.ok` to ensure the request was successful before parsing JSON.
// - Use `.catch()` or `try...catch` to handle errors, such as network issues or invalid API endpoints.
// - Fetch defaults to the GET method but can handle other HTTP methods by providing options.
// - JSON is commonly used with APIs due to its simplicity and compatibility with JavaScript.

