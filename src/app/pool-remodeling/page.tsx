import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("pool-remodeling")!;
export const metadata = buildContentMetadata(data);

export default function PoolRemodelingPage() {
  return <ContentPage data={data} />;
}

