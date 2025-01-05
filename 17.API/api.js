// Client / Browser => API / Waiter => Server / Chef
// Client / Browser => API / Waiter => Server / Chef => Database / Kitchen

// two or more systems communicate with each other
// API (Application Programming Interface) is a way for two or more systems to communicate with each other

// Rest API => Representational State Transfer => standalone requests

// statelessness => no state => no session => no cookies

// uniform interface => same interface for all requests => same endpoint => same method => same parameters

// resource based => json,xml

// self descriptive messages => no need for documentation

// types of api
// 1. rest api
// 2. soap api
// 3. graphql api


// protocols
// 1. rest - no maintaing state - use when team have communication
// 2. graph ql - use when team is separate from each other
// 3. soap -  skip it
// 4. grpc - remote procedure call - no need for endpoint mention

// what is endpoint in api => url/foods - here foods is the endpoint- use noun for endpoint- and use in plural 
// when retriving collection of data - use in plural 


// http methods
// 1. get - getiing data from server
// 2. post - sending data
// 3. put - updating data
// 4. delete - deleting data
// 5. patch - partial update of data
// 6. options  - sending set of options to server

// path parameter => /users/:id
// query parameter => /users?id=1


// hirerachial ids => /users/1/posts/1/comments/1


// status codes
// 1. 200 - ok - success
// 2. 201 - created -
// 3. 204 - no content - no data returned

// 4. 301 - moved permanently - url changed
// 5. 302 - moved temporarily - url changed

// 6. 400 - bad request - invalid request
// 7. 401 - unauthorized
// 8. 403 - forbidden 
// 9. 404 - not found  - no resource found
// 10. 405 - method not allowed
// 11. 409 - conflict
// 12. 410 - gone
// 13. 422 - unprocessable entity
// 14. 429 - too many requests

// 15. 500 - internal server error
// 16. 502 - bad gateway
// 17. 503 - service unavailable - server is down
// 18. 504 - gateway timeout - server is taking too long to respond



// all 200 codes are successful
// all 300 codes are redirection
// all 400 codes are client errors
// all 500 codes are server errors

// reverse proxy and forward proxy


// meaning full error messages
// error messages should be meaningful and should give information about the error
// code,nmessage, description, suggestedactions


// error handling
// api throttling - rate limiting
// pagination
// cross site scripting (XSS)
// sql injection
// api deprecation
// api versioning and types


// rapid api
