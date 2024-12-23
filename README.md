# Backend_Coding_T




Understanding Backend Development
Backend development refers to the server-side of web applications. It focuses on databases, servers, application logic, and APIs, ensuring that everything works behind the scenes to support the frontend (what users see and interact with).

1. Backend Basics
Server: A server is a computer or software that provides resources, data, or services to other devices (clients) over a network. It handles requests from clients and sends back appropriate responses.
Client-Side Rendering (CSR): In CSR, the browser downloads a minimal HTML page and renders the content dynamically using JavaScript. Example frameworks: React, Angular.
Server-Side Rendering (SSR): In SSR, the server generates a fully-rendered HTML page and sends it to the client. This approach is SEO-friendly and faster for the first load. Example frameworks: Next.js, Express with templating engines.
2. NPM and NPX
NPM (Node Package Manager): A tool to install, manage, and share JavaScript packages. It comes with Node.js and helps developers work with libraries efficiently. Example:
bash
Copy code
npm install express
NPX: A package runner that allows you to execute JavaScript packages without globally installing them. Example:
bash
Copy code
npx create-react-app my-app
3. Modules and Packages
Module: A file containing code (JavaScript functions, objects, etc.) that can be reused. Modules are imported/exported to organize code. Example:
javascript
Copy code
module.exports = { greet: () => console.log('Hello') };
Package: A collection of modules bundled together. Packages often have a package.json file to manage metadata, dependencies, and scripts.
4. Node.js and Express.js
Node.js: A JavaScript runtime environment that allows developers to run JavaScript on the server-side. It’s built on Chrome's V8 engine and is efficient for building scalable applications.
Express.js: A lightweight Node.js framework for building web applications and APIs. It simplifies routing, middleware handling, and request-response logic.
5. View Engine
A view engine is used in server-side rendering to dynamically generate HTML views on the server. Popular options include:

EJS (Embedded JavaScript): Allows embedding JavaScript into HTML templates.
Pug (formerly Jade): Simplifies HTML structure with indentation.
6. HTTP Methods
GET: Used to fetch data from the server. Example:
javascript
Copy code
app.get('/users', (req, res) => res.send(users));
POST: Used to send data to the server to create new resources.
javascript
Copy code
app.post('/users', (req, res) => res.send('User created'));
PUT/PATCH: Used to update existing resources. PUT replaces the resource entirely, while PATCH updates specific fields.
javascript
Copy code
app.patch('/users/:id', (req, res) => res.send('User updated'));
DELETE: Used to delete a resource from the server.
javascript
Copy code
app.delete('/users/:id', (req, res) => res.send('User deleted'));
7. HTTP Server
An HTTP server listens for incoming requests and responds with the requested data. In Node.js, you can create an HTTP server using the http module:

javascript
Copy code
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
8. REST API
A REST API (Representational State Transfer) is a set of rules for designing web services. It uses HTTP methods to interact with resources and follows stateless architecture principles.

Example endpoints:
GET /users: Fetch all users.
POST /users: Add a new user.
PATCH /users/:id: Update user data.
DELETE /users/:id: Remove a user.
9. CRUD Operations
CRUD stands for Create, Read, Update, Delete, which are the fundamental operations for managing data:

Create: Add new data (POST).
Read: Retrieve data (GET).
Update: Modify existing data (PUT/PATCH).
Delete: Remove data (DELETE).
10. MongoDB
MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. It’s ideal for applications requiring high scalability and performance. Key features:

Database: A collection of collections.
Collection: A group of documents (like a table in relational databases).
Document: A single JSON-like record.
Example using Node.js and MongoDB:

javascript
Copy code
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
  await client.connect();
  const db = client.db('myDatabase');
  const collection = db.collection('users');
  
  await collection.insertOne({ name: 'John', age: 30 });
  console.log(await collection.find().toArray());
  await client.close();
}
main();
Conclusion
Backend development involves building robust and scalable systems that manage data, handle business logic, and provide APIs to frontend applications. Tools like Node.js, Express.js, and databases like MongoDB simplify the process and allow developers to focus on creating efficient applications.











Database Commands
show dbs

Lists all databases in the MongoDB server.
use <database_name>

Switches to the specified database. If the database does not exist, it creates a new one upon inserting data.
db

Displays the current database.
db.dropDatabase()

Deletes the current database.
Collection Commands
show collections

Lists all collections in the current database.
db.createCollection('<collection_name>')

Creates a new collection.
db.<collection_name>.drop()

Deletes the specified collection.
CRUD (Create, Read, Update, Delete) Operations
Create
db.<collection_name>.insertOne({<document>})

Inserts a single document into the specified collection.
db.<collection_name>.insertMany([{<document1>}, {<document2>}])

Inserts multiple documents into the specified collection.
db.<collection_name>.save({<document>})

Inserts a new document or updates an existing one.
Read
db.<collection_name>.find()

Retrieves all documents in the collection.
db.<collection_name>.find({<query>})

Retrieves documents that match the query criteria.
db.<collection_name>.findOne({<query>})

Retrieves the first document that matches the query.
db.<collection_name>.countDocuments({<query>})

Counts documents that match the query criteria.
db.<collection_name>.find({}).sort({<field>: 1})

Sorts documents by the specified field in ascending (1) or descending (-1) order.
db.<collection_name>.find({}).limit(<number>)

Limits the number of documents returned.
db.<collection_name>.find({}).skip(<number>)

Skips the specified number of documents.
Update
db.<collection_name>.updateOne({<query>}, {<update_operation>})

Updates the first document that matches the query.
db.<collection_name>.updateMany({<query>}, {<update_operation>})

Updates all documents that match the query.
db.<collection_name>.replaceOne({<query>}, {<new_document>})

Replaces the first document that matches the query with a new document.
Update Operators:

$set: Updates specific fields.
$inc: Increments a field by a specified value.
$unset: Removes a specific field.
$push: Appends a value to an array.
$pull: Removes matching elements from an array.
Delete
db.<collection_name>.deleteOne({<query>})

Deletes the first document that matches the query.
db.<collection_name>.deleteMany({<query>})

Deletes all documents that match the query.
Indexing Commands
db.<collection_name>.createIndex({<field>: 1})

Creates an index on a field (ascending: 1, descending: -1).
db.<collection_name>.getIndexes()

Retrieves all indexes on a collection.
db.<collection_name>.dropIndex('<index_name>')

Removes a specific index.
db.<collection_name>.dropIndexes()

Removes all indexes on a collection.
Aggregation Commands
db.<collection_name>.aggregate([{<stage>}, {...}])

Performs data aggregation using a pipeline of stages.
Common Aggregation Stages:

$match: Filters documents.
$group: Groups documents by a specified field.
$project: Modifies the output structure.
$sort: Sorts documents.
$limit: Limits the number of documents.
$skip: Skips a specified number of documents.
Admin Commands
db.stats()

Displays statistics about the current database.
db.<collection_name>.stats()

Displays statistics about the specified collection.
db.serverStatus()

Displays the status of the MongoDB server.
db.currentOp()

Displays information about active operations.
User Management Commands
db.createUser({<user_definition>})

Creates a new database user.
db.updateUser('<username>', {<update_definition>})

Updates an existing user's information.
db.dropUser('<username>')

Deletes a user from the database.
show users

Lists all users in the current database.
