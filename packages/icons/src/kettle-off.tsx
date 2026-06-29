import { mdiKettleOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KettleOff(props: IconComponentProps) {
  return <Icon path={mdiKettleOff} {...props} />;
}

export { mdiKettleOff as path };
