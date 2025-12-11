"use client";

import { useQuery } from "@apollo/client/react";
import { GET_PAGE } from "@/lib/graphql/queries";
import { useParams } from "next/navigation";
import PageRenderer from "@/components/PageRenderer";
import { GetPageQueryResponse } from "@/types/pageQueryTypes";

export default function DynamicPage() {
  const params = useParams();

  let slug = "home";
  if (params?.slug) {
    slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  }

  const { data, loading, error } = useQuery<GetPageQueryResponse>(GET_PAGE, {
  variables: { slug },
});
console.log(data?.getPage.components)

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data?.getPage) return <p>404 - Page not found</p>;

  return (
    <main className="min-h-screen mx-auto">
      <PageRenderer sections={data.getPage.components} />
    </main>
  );
}
