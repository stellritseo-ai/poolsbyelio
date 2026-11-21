import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("pool-builders-nashville-tn")!;
export const metadata = buildContentMetadata(data);

export default function PoolBuildersNashvillePage() {
  return <ContentPage data={data} />;
}

