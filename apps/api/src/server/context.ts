// import type { Session } from "@auth/core/types"
import type { inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
// import { getSession } from "auth-astro/server"
// import { prisma } from "./db"
import * as trpcExpress from "@trpc/server/adapters/express";

type Session = {
  id: string;
};

interface CreateInnerContextOptions
  extends Partial<FetchCreateContextFnOptions> {
  session: Session | null;
}

export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    // prisma,
    session: opts?.session,
  };
}

export async function createContextFetch(opts: FetchCreateContextFnOptions) {
  // const session = await getSession(opts.req)
  const session = { id: "1" };

  const contextInner = await createContextInner({ session });

  return {
    ...contextInner,
  };
}

export const createContextExress = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  // const session = await getSession(opts.req)
  const session = { id: "1" };

  const contextInner = await createContextInner({ session });

  return {
    ...contextInner,
  };

};
// type Context = inferAsyncReturnType<typeof createContext>;

export type Context = inferAsyncReturnType<typeof createContextInner>;
