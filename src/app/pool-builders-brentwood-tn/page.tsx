import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("pool-builders-brentwood-tn")!;
export const metadata = buildContentMetadata(data);

export default function PoolBuildersBrentwoodPage() {
  return <ContentPage data={data} />;
}

