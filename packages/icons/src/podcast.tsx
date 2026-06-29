import { mdiPodcast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Podcast(props: IconComponentProps) {
  return <Icon path={mdiPodcast} {...props} />;
}

export { mdiPodcast as path };
