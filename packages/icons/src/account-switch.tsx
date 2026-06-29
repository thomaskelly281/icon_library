import { mdiAccountSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountSwitch(props: IconComponentProps) {
  return <Icon path={mdiAccountSwitch} {...props} />;
}

export { mdiAccountSwitch as path };
