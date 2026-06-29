import { mdiDipSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DipSwitch(props: IconComponentProps) {
  return <Icon path={mdiDipSwitch} {...props} />;
}

export { mdiDipSwitch as path };
