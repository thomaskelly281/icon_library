import { mdiTagArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiTagArrowUpOutline} {...props} />;
}

export { mdiTagArrowUpOutline as path };
