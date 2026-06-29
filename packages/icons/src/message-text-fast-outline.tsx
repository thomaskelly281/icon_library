import { mdiMessageTextFastOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextFastOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageTextFastOutline} {...props} />;
}

export { mdiMessageTextFastOutline as path };
