import { mdiEarHearingLoop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarHearingLoop(props: IconComponentProps) {
  return <Icon path={mdiEarHearingLoop} {...props} />;
}

export { mdiEarHearingLoop as path };
