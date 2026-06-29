import { mdiTableCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableCheck(props: IconComponentProps) {
  return <Icon path={mdiTableCheck} {...props} />;
}

export { mdiTableCheck as path };
