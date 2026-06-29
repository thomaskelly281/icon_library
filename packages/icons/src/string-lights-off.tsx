import { mdiStringLightsOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StringLightsOff(props: IconComponentProps) {
  return <Icon path={mdiStringLightsOff} {...props} />;
}

export { mdiStringLightsOff as path };
