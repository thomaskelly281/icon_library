import { mdiAutorenewOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AutorenewOff(props: IconComponentProps) {
  return <Icon path={mdiAutorenewOff} {...props} />;
}

export { mdiAutorenewOff as path };
