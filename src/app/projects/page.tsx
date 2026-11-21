import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("projects")!;
export const metadata = buildContentMetadata(data);

export default function ProjectsPage() {
  return <ContentPage data={data} />;
}

