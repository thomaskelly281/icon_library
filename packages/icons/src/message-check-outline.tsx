import { mdiMessageCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageCheckOutline} {...props} />;
}

export { mdiMessageCheckOutline as path };
