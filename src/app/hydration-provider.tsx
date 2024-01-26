"use client";

import { HydrationBoundary } from "@tanstack/react-query";

type HydrationProviderProps = {
  children: React.ReactNode;
  dehydratedState: unknown;
};
export function HydrationProvider({
  children,
  dehydratedState,
}: HydrationProviderProps) {
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
