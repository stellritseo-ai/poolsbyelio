import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("infinity-edge-pools")!;
export const metadata = buildContentMetadata(data);

export default function InfinityEdgePoolsPage() {
  return <ContentPage data={data} />;
}

