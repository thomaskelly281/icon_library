import { mdiSkullOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkullOutline(props: IconComponentProps) {
  return <Icon path={mdiSkullOutline} {...props} />;
}

export { mdiSkullOutline as path };
