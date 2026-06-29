import { mdiMouseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseOutline(props: IconComponentProps) {
  return <Icon path={mdiMouseOutline} {...props} />;
}

export { mdiMouseOutline as path };
