import { mdiCodeEqual } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeEqual(props: IconComponentProps) {
  return <Icon path={mdiCodeEqual} {...props} />;
}

export { mdiCodeEqual as path };
