import { mdiTagArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiTagArrowDownOutline} {...props} />;
}

export { mdiTagArrowDownOutline as path };
