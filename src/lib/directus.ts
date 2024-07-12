import { authentication, createDirectus, rest } from "@directus/sdk";

const client = createDirectus("http://localhost:8055")
  .with(authentication("cookie", { credentials: "include", autoRefresh: true }))
  .with(rest({ credentials: "include" }));

export default client;
