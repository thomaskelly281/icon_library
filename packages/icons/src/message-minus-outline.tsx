import { mdiMessageMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageMinusOutline} {...props} />;
}

export { mdiMessageMinusOutline as path };
