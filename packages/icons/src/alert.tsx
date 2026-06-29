import { mdiAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Alert(props: IconComponentProps) {
  return <Icon path={mdiAlert} {...props} />;
}

export { mdiAlert as path };
