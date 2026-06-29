import { mdiEarbudsOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarbudsOff(props: IconComponentProps) {
  return <Icon path={mdiEarbudsOff} {...props} />;
}

export { mdiEarbudsOff as path };
