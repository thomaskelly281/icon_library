import { mdiRestartOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RestartOff(props: IconComponentProps) {
  return <Icon path={mdiRestartOff} {...props} />;
}

export { mdiRestartOff as path };
