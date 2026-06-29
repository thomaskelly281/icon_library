import { mdiMessageFlashOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageFlashOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageFlashOutline} {...props} />;
}

export { mdiMessageFlashOutline as path };
