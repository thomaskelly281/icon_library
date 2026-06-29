import { mdiBookCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCheck(props: IconComponentProps) {
  return <Icon path={mdiBookCheck} {...props} />;
}

export { mdiBookCheck as path };
