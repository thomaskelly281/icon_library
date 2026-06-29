import { mdiTagCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagCheck(props: IconComponentProps) {
  return <Icon path={mdiTagCheck} {...props} />;
}

export { mdiTagCheck as path };
