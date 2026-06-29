import { mdiFileCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCheck(props: IconComponentProps) {
  return <Icon path={mdiFileCheck} {...props} />;
}

export { mdiFileCheck as path };
