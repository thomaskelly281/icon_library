import { mdiDeleteOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteOff(props: IconComponentProps) {
  return <Icon path={mdiDeleteOff} {...props} />;
}

export { mdiDeleteOff as path };
