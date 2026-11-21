import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("lazy-river-construction")!;
export const metadata = buildContentMetadata(data);

export default function LazyRiverConstructionPage() {
  return <ContentPage data={data} />;
}

