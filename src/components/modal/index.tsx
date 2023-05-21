import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import styles from "./styles.css?inline";

interface IProps {
  size: "sm" | "lg";
  frosted?: boolean;
}

export default component$(({ size, frosted }: IProps) => {
  useStylesScoped$(styles);

  return (
    <div class={["modal", size, { frosted }]}>
      <div class="modal-content">
        <div class="close">close</div>
        <Slot />
        <main class="main-content">
          <Slot name="content" />
        </main>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});
