import { mdiYoutubeStudio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function YoutubeStudio(props: IconComponentProps) {
  return <Icon path={mdiYoutubeStudio} {...props} />;
}

export { mdiYoutubeStudio as path };
