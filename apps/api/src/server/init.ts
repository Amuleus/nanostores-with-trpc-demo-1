import { TRPCError, initTRPC } from "@trpc/server";
import type { Context } from "./context";

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

const checkAuth = t.middleware(async (opts) => {
  if (opts.ctx.session === null || opts.ctx.session === undefined)
    throw new TRPCError({ code: "UNAUTHORIZED" });

  const data = { id: "1", name: "John", email: "john@test.com" };

  return opts.next({
    ctx: {
      user: data,
    },
  });
});

export const privateProcedure = publicProcedure.use(checkAuth);
