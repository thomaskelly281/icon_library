import { mdiSmartCardOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmartCardOff(props: IconComponentProps) {
  return <Icon path={mdiSmartCardOff} {...props} />;
}

export { mdiSmartCardOff as path };
