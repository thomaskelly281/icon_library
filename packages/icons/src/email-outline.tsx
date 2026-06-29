import { mdiEmailOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailOutline} {...props} />;
}

export { mdiEmailOutline as path };
