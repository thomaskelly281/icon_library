import { mdiSignalOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalOff(props: IconComponentProps) {
  return <Icon path={mdiSignalOff} {...props} />;
}

export { mdiSignalOff as path };
