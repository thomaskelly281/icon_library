import { mdiMessageFastOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageFastOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageFastOutline} {...props} />;
}

export { mdiMessageFastOutline as path };
