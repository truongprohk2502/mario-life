import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./styles.css?inline";

interface IFormData {
  name: string;
  message: string;
}

export default component$(() => {
  useStylesScoped$(styles);

  const formVisible = useSignal<boolean>(false);
  const formState = useStore<IFormData>({ name: "", message: "" });

  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, fugiat.
        Doloremque repellat harum recusandae asperiores corporis aspernatur
        nesciunt! Nam, ratione tempore? Quod, error fuga maxime consectetur
        dolorum consequuntur labore numquam.
      </p>

      <button onClick$={() => (formVisible.value = true)}>Contact Me</button>

      {formVisible.value && (
        <form
          preventdefault:submit
          onSubmit$={() => {
            console.log(formState.name, formState.message);
            formState.name = "";
            formState.message = "";
          }}
        >
          <label>
            <span>Your name:</span>
            <input
              type="text"
              value={formState.name}
              onInput$={(e) =>
                (formState.name = (e.target as HTMLInputElement).value)
              }
            />
          </label>
          <label>
            <span>Your message:</span>
            <textarea
              value={formState.message}
              onInput$={(e) =>
                (formState.message = (e.target as HTMLInputElement).value)
              }
            ></textarea>
          </label>
          <button>Send</button>

          <p>{formState.name}</p>
          <p>{formState.message}</p>
        </form>
      )}
    </article>
  );
});
