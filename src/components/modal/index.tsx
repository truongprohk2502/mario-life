import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import styles from "./styles.css?inline";

interface IProps {
  size: "sm" | "lg";
  frosted?: boolean;
  close: PropFunction<() => void>;
}

export default component$(({ size, frosted, close }: IProps) => {
  useStylesScoped$(styles);

  return (
    <div class={["modal", size, { frosted }]}>
      <div class="modal-content">
        <div class="close" onClick$={close}>
          close
        </div>
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
