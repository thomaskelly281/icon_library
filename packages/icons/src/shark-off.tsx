import { mdiSharkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SharkOff(props: IconComponentProps) {
  return <Icon path={mdiSharkOff} {...props} />;
}

export { mdiSharkOff as path };
