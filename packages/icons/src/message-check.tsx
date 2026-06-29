import { mdiMessageCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageCheck(props: IconComponentProps) {
  return <Icon path={mdiMessageCheck} {...props} />;
}

export { mdiMessageCheck as path };
