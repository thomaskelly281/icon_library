import { mdiFileTableBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileTableBox(props: IconComponentProps) {
  return <Icon path={mdiFileTableBox} {...props} />;
}

export { mdiFileTableBox as path };
