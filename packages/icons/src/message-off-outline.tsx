import { mdiMessageOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageOffOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageOffOutline} {...props} />;
}

export { mdiMessageOffOutline as path };
