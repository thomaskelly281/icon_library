import { mdiMessageImageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageImageOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageImageOutline} {...props} />;
}

export { mdiMessageImageOutline as path };
