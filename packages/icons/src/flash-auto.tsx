import { mdiFlashAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashAuto(props: IconComponentProps) {
  return <Icon path={mdiFlashAuto} {...props} />;
}

export { mdiFlashAuto as path };
