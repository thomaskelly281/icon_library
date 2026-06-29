import { mdiVideoCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoCheckOutline} {...props} />;
}

export { mdiVideoCheckOutline as path };
