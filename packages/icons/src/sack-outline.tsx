import { mdiSackOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SackOutline(props: IconComponentProps) {
  return <Icon path={mdiSackOutline} {...props} />;
}

export { mdiSackOutline as path };
