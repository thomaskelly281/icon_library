import { mdiMessageCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageCogOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageCogOutline} {...props} />;
}

export { mdiMessageCogOutline as path };
