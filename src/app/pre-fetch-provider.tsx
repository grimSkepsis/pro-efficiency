import {
  CHARACTER_DATA_QUERY_KEY,
  getCharacterData,
} from "@/services/character";
import { HydrationProvider } from "./hydration-provider";
import { getQueryClient } from "./queryClient";
import { dehydrate } from "@tanstack/react-query";

type PreFetchProviderProps = {
  children: React.ReactNode;
};
export default async function PreFetchProvider({
  children,
}: PreFetchProviderProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [CHARACTER_DATA_QUERY_KEY],
    queryFn: getCharacterData,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationProvider dehydratedState={dehydratedState}>
      {children}
    </HydrationProvider>
  );
}
