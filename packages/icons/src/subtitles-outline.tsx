import { mdiSubtitlesOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SubtitlesOutline(props: IconComponentProps) {
  return <Icon path={mdiSubtitlesOutline} {...props} />;
}

export { mdiSubtitlesOutline as path };
