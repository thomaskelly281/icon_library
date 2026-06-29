import { mdiKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyOutline(props: IconComponentProps) {
  return <Icon path={mdiKeyOutline} {...props} />;
}

export { mdiKeyOutline as path };
