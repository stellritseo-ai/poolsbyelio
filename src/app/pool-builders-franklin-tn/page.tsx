import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("pool-builders-franklin-tn")!;
export const metadata = buildContentMetadata(data);

export default function PoolBuildersFranklinPage() {
  return <ContentPage data={data} />;
}

