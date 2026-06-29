import { mdiPulse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pulse(props: IconComponentProps) {
  return <Icon path={mdiPulse} {...props} />;
}

export { mdiPulse as path };
