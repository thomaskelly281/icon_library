import { mdiThumbUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThumbUpOutline(props: IconComponentProps) {
  return <Icon path={mdiThumbUpOutline} {...props} />;
}

export { mdiThumbUpOutline as path };
