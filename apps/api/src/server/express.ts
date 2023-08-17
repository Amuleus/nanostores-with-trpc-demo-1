import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import cors from "cors";
import express from "express";
import { createContextExress } from "./context";

const app = express();

// Setup CORS
app.use(cors());

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContextExress,
  })
);
app.listen(3000);
