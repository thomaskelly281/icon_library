import { mdiEarHearingOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarHearingOff(props: IconComponentProps) {
  return <Icon path={mdiEarHearingOff} {...props} />;
}

export { mdiEarHearingOff as path };
