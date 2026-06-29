import { mdiFlashRedEye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashRedEye(props: IconComponentProps) {
  return <Icon path={mdiFlashRedEye} {...props} />;
}

export { mdiFlashRedEye as path };
