import { mdiAccessPointCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointCheck(props: IconComponentProps) {
  return <Icon path={mdiAccessPointCheck} {...props} />;
}

export { mdiAccessPointCheck as path };
