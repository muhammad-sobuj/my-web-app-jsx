"use client";

import dynamic from "next/dynamic";

const ClientOnlyComponent = dynamic(
  () => Promise.resolve(({ children }) => <>{children}</>),
  {
    ssr: false,
    loading: () => null,
  }
);

export function NoSSR({ children, fallback = null }) {
  return (
    <ClientOnlyComponent fallback={fallback}>{children}</ClientOnlyComponent>
  );
}
