import { mdiImageCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageCheck(props: IconComponentProps) {
  return <Icon path={mdiImageCheck} {...props} />;
}

export { mdiImageCheck as path };
