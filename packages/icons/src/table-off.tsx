import { mdiTableOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableOff(props: IconComponentProps) {
  return <Icon path={mdiTableOff} {...props} />;
}

export { mdiTableOff as path };
