import { mdiAlertOctagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertOctagram(props: IconComponentProps) {
  return <Icon path={mdiAlertOctagram} {...props} />;
}

export { mdiAlertOctagram as path };
