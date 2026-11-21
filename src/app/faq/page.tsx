import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("faq")!;
export const metadata = buildContentMetadata(data);

export default function FaqPage() {
  return <ContentPage data={data} />;
}

