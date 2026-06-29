import { mdiMessageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageOutline} {...props} />;
}

export { mdiMessageOutline as path };
