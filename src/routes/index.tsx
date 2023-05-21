import { Resource, component$ } from "@builder.io/qwik";
import { routeLoader$, Link } from "@builder.io/qwik-city";
import type { BlogData } from "./blog/[id]";

export const useBlogs = routeLoader$(async () => {
  const res = await fetch("http://localhost:3000/blogs");
  const data = await res.json();

  return data as BlogData[];
});

export default component$(() => {
  const blogsData = useBlogs();

  return (
    <div>
      <h1>Okie Dokie!</h1>

      <Resource
        value={blogsData}
        onPending={() => <div>Loading blogs...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs &&
              blogs.map((blog) => (
                <div key={blog.id}>
                  <h3>{blog.title}</h3>
                  <p>{blog.content.slice(0, 50)}...</p>
                  <Link href={"/blog/" + blog.id}>Read More</Link>
                </div>
              ))}
          </div>
        )}
      />
    </div>
  );
});
