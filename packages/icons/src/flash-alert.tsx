import { mdiFlashAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashAlert(props: IconComponentProps) {
  return <Icon path={mdiFlashAlert} {...props} />;
}

export { mdiFlashAlert as path };
