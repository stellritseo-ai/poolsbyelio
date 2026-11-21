import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("projects/downtown-nashville-pool-bars")!;
export const metadata = buildContentMetadata(data);

export default function DowntownNashvilleBarsProjectPage() {
  return <ContentPage data={data} />;
}

