import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlog = routeLoader$(async ({ params }) => {
  const res = await fetch("http://localhost:3000/blogs/" + params.id);
  const data = await res.json();

  return data as BlogData;
});

export default component$(() => {
  const blogData = useBlog();

  return (
    <div class="blog">
      <Resource
        value={blogData}
        onPending={() => <div>Loading...</div>}
        onResolved={(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        )}
      />
    </div>
  );
});
