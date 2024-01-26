"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./queryClient";

type Props = {
  children: React.ReactNode;
};
export default function QueryProvider({ children }: Props) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
