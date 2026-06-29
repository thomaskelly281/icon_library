import { mdiFunction } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Function(props: IconComponentProps) {
  return <Icon path={mdiFunction} {...props} />;
}

export { mdiFunction as path };
