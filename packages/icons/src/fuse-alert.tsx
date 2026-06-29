import { mdiFuseAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FuseAlert(props: IconComponentProps) {
  return <Icon path={mdiFuseAlert} {...props} />;
}

export { mdiFuseAlert as path };
