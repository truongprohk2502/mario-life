import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <nav>
        <img src="/mario_block.jpeg" alt="logo" width={40} height={50} />
        <h1>Mario Life</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
