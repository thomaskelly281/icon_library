import { mdiFileRotateLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRotateLeft(props: IconComponentProps) {
  return <Icon path={mdiFileRotateLeft} {...props} />;
}

export { mdiFileRotateLeft as path };
