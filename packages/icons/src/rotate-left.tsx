import { mdiRotateLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RotateLeft(props: IconComponentProps) {
  return <Icon path={mdiRotateLeft} {...props} />;
}

export { mdiRotateLeft as path };
