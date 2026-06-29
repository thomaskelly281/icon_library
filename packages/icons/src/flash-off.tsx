import { mdiFlashOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashOff(props: IconComponentProps) {
  return <Icon path={mdiFlashOff} {...props} />;
}

export { mdiFlashOff as path };
