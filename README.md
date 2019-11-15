Installs: 

Nodemon - for refresh on change 
Babel - for ECMAscript conversion




Essentially every Express application is a just a series of routing and middleware function calls.

There are two kinds of middleware in Express.js: application-level middleware and router-level middleware. 



Client -> REST API -> Server -> Database

# Testing routes
curl http://localhost:3000
-> Received a GET HTTP method
curl -X POST http://localhost:3000
-> Received a POST HTTP method
curl -X PUT http://localhost:3000
-> Received a PUT HTTP method


// returns all users since we now have user object storing all the users 
curl http://localhost:3000/users

// This is operating on user resource, and accessing specific identifier (user id )
curl -X PUT http://localhost:3000/users/1

// In a cURL request you can specify HTTP headers with the -H flag -- that's how we are saying we want to transfer JSON -- and data as payload with the -d flag. You should be able to create messages this way:
curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'


# Authentication
Being a stateless is another characteristic of RESTful services. After all, it should be possible to create multiple server instances to balance the incoming traffic evenly between the servers.
 That's why a server cannot keep the state (e.g. authenticated user) and the client always has to send this information along with each request. 