import { mdiPlayCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiPlayCircleOutline} {...props} />;
}

export { mdiPlayCircleOutline as path };
