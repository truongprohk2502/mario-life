import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fugiat.
        Doloremque repellat harum recusandae asperiores corporis aspernatur
        nesciunt! Nam, ratione tempore? Quod, error fuga maxime consectetur
        dolorum consequuntur labore numquam.
      </p>
    </article>
  );
});
