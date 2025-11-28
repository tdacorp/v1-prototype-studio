'use client'

import { GET_PAGE } from "@/lib/graphql/queries";
import { useQuery } from "@apollo/client/react";

export default function Home() {
  const { data, loading, error } = useQuery(GET_PAGE);

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
