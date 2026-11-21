import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("gunite-pool-construction")!;
export const metadata = buildContentMetadata(data);

export default function GunitePoolConstructionPage() {
  return <ContentPage data={data} />;
}

