import { RouterPageView } from "./router";
import { nav } from "./app.css";

export function App() {
  return (
    <div>
      <nav>
        <a class={nav()} href="/">
          home
        </a>
      </nav>
      <RouterPageView />
    </div>
  );
}
