import { mdiFlashAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiFlashAlertOutline} {...props} />;
}

export { mdiFlashAlertOutline as path };
