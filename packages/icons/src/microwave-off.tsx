import { mdiMicrowaveOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrowaveOff(props: IconComponentProps) {
  return <Icon path={mdiMicrowaveOff} {...props} />;
}

export { mdiMicrowaveOff as path };
