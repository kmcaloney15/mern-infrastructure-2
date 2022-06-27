// users-service.js
// sign up related app logic in the users-service.js service module

// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
// * means everything or all so importing all of it
import * as usersAPI from './users-api';

// async since we are awaiting the data in the form
export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);
    // Baby step by returning whatever is sent back by the server
    return token;
    //function so you have to return something
}
