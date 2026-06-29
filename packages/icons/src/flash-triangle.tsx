import { mdiFlashTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashTriangle(props: IconComponentProps) {
  return <Icon path={mdiFlashTriangle} {...props} />;
}

export { mdiFlashTriangle as path };
