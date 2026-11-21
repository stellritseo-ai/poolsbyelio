import ContentPage, { buildContentMetadata } from "@/components/ContentPage";
import { getContentPage } from "@/content";

const data = getContentPage("projects/sound-waves-gaylord-opryland")!;
export const metadata = buildContentMetadata(data);

export default function SoundWavesProjectPage() {
  return <ContentPage data={data} />;
}

