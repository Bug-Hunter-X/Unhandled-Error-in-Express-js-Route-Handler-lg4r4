# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: missing error handling and insecure array access.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description

The original code attempts to access a user from an array using the ID from the request parameters. It lacks crucial error handling for:

1. **Invalid User IDs:** If a user with the given ID doesn't exist, accessing `users[userId]` will result in `undefined`.  Attempting to access properties of `undefined` throws an error.
2. **Incorrect Data Types:** If `req.params.id` isn't a valid array index (e.g., a string), it might cause unexpected behavior.

## Solution

The `bugSolution.js` file fixes these issues by:

1. **Input Validation:** Checking if the `userId` is a valid number.
2. **Error Handling:** Using a `try...catch` block to handle potential errors gracefully and return appropriate HTTP status codes.
3. **Finding User by ID:** Implementing a more robust method to find users by ID, ensuring no errors arise from invalid indexes.