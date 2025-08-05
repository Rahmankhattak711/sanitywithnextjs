import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "co4ao4rv",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token:
    "skbxzGsL3bDRoRtWH6FjYqEWhohhbv0CDyQDtOE3bjPPN49PMtmm5PgPqBILb6fwXJuFBMofmNGkZj0cBcpdBQTP1Pa1ACW2mY9mmMjZERsMsfErfUYevALFHYFPpP4EK33xM08aOozRsvj8G1tF8t2KtLwqZJiQGcPR9pnA7ksB4x4R2H9T",
});
