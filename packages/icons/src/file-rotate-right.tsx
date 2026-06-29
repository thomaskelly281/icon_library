import { mdiFileRotateRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRotateRight(props: IconComponentProps) {
  return <Icon path={mdiFileRotateRight} {...props} />;
}

export { mdiFileRotateRight as path };
