import { mdiRestartAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RestartAlert(props: IconComponentProps) {
  return <Icon path={mdiRestartAlert} {...props} />;
}

export { mdiRestartAlert as path };
