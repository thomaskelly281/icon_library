import { mdiFlashlight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Flashlight(props: IconComponentProps) {
  return <Icon path={mdiFlashlight} {...props} />;
}

export { mdiFlashlight as path };
