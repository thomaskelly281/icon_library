import { mdiAccountOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountOff(props: IconComponentProps) {
  return <Icon path={mdiAccountOff} {...props} />;
}

export { mdiAccountOff as path };
