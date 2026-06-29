import { mdiFileSwapOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSwapOutline(props: IconComponentProps) {
  return <Icon path={mdiFileSwapOutline} {...props} />;
}

export { mdiFileSwapOutline as path };
