import { useEffect } from "preact/hooks";
import { trpc } from "nanostores-with-trpc-demo-1-api";

import { useStore } from "@nanostores/preact";
import { $users } from "./store";

export const HomePage = () => {
  const users = useStore($users);

  useEffect(() => {
    trpc.example.public
      .query()
      .then((res1) => {
        console.log("res1:", res1);
      })
      .catch((err1) => {
        console.log("error:", err1);
      });
    return () => {
      // Optional: Any cleanup code
    };
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
};
