/**
 * Routes that require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect to the another page if the user is authenticated
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for the API authentication routes
 * Routes that start with this prefix will be used for authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Users will be redirected to this if they are logged in
 * @type {string}
 */
export const DEAFULT_LOGIN_REDIRECT = "/settings";
