import { mdiAlertDecagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertDecagram(props: IconComponentProps) {
  return <Icon path={mdiAlertDecagram} {...props} />;
}

export { mdiAlertDecagram as path };
