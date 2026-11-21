import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("process")!;
export const metadata = buildContentMetadata(data);

export default function ProcessPage() {
  return <ContentPage data={data} />;
}

