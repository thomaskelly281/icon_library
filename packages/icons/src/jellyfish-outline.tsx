import { mdiJellyfishOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function JellyfishOutline(props: IconComponentProps) {
  return <Icon path={mdiJellyfishOutline} {...props} />;
}

export { mdiJellyfishOutline as path };
