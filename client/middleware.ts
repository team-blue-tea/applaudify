// Without a defined matcher, this line applies next-auth to the whole project
export { default } from "next-auth/middleware"


// This line applies next-auth to defined routes
/* export const config = { matcher: ["/home", "/about"] } */