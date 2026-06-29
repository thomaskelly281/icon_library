import { mdiCandyOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CandyOff(props: IconComponentProps) {
  return <Icon path={mdiCandyOff} {...props} />;
}

export { mdiCandyOff as path };
