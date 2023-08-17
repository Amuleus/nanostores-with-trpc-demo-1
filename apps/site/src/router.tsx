import { useStore } from "@nanostores/preact";
import { ConfigFromRouter, createRouter } from "@nanostores/router";
import { Error404 } from "./pages/Error404";
import { HomePage } from "./pages/home";

export const $router = createRouter({
  home: "/",
} as const);

type Config = ConfigFromRouter<typeof $router>;
export type RouterKeys = keyof Config;

export const RouterPageView = () => {
  const page = useStore($router);

  if (!page) {
    return <Error404 />;
  } else if (page.route === "home") {
    return <HomePage />;
  } else {
    return <Error404 />;
  }
};
