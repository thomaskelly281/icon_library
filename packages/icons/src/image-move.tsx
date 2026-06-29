import { mdiImageMove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMove(props: IconComponentProps) {
  return <Icon path={mdiImageMove} {...props} />;
}

export { mdiImageMove as path };
