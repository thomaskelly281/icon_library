import { mdiProgressAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressAlert(props: IconComponentProps) {
  return <Icon path={mdiProgressAlert} {...props} />;
}

export { mdiProgressAlert as path };
