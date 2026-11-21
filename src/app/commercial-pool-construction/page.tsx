import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("commercial-pool-construction")!;
export const metadata = buildContentMetadata(data);

export default function CommercialPoolConstructionPage() {
  return <ContentPage data={data} />;
}

