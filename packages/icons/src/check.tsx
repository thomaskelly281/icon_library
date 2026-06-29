import { mdiCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Check(props: IconComponentProps) {
  return <Icon path={mdiCheck} {...props} />;
}

export { mdiCheck as path };
