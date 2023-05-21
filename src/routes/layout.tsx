import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <p>Copyright 2023 Mario Life.</p>
      </footer>
    </>
  );
});
