import users from './api/users.js';

export default function (server, mongoose) {
  // Connect REST API routes to the web server
  users(server, mongoose);

  // Add more API routes here if needed
}