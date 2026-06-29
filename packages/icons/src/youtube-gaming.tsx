import { mdiYoutubeGaming } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function YoutubeGaming(props: IconComponentProps) {
  return <Icon path={mdiYoutubeGaming} {...props} />;
}

export { mdiYoutubeGaming as path };
