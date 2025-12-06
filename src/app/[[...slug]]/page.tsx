"use client";

import { useQuery } from "@apollo/client/react";
import { GET_PAGE } from "@/lib/graphql/queries";
import { useParams } from "next/navigation";

export default function DynamicPage() {
  const params = useParams();

  let slug = "home";

  if (params?.slug) {
    slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  }

  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug },
  });

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>TDACorp - Studio</h1>
      <div>
        <h1>Products from API</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}
