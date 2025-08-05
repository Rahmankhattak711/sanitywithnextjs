import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "co4ao4rv",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token:
    "skTnM1xdj2JH52wAXsaRpGsUnWiooo709pj1NYVhnT3VzNoRwuFiasrYXkKLn9CurczH6AFNJ0UdXyfhUByORJpWUjZQbSbaPIhwFguKqMqooGfo0OwKDHKR1gIiWCv28NGGvbeBHit2DBIcQv4EhJPL2cVQdJWfKTZbmtQq1jnhNrlX4Fku",
});
