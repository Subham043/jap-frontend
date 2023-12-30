import { withAuth } from "next-auth/middleware"

export default withAuth(
  {
    secret: process.env.AUTHSECRET,
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = { 
    matcher: ["/account/:path*","/wishlist","/checkout","/cart"],
}