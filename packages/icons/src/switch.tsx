import { mdiSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Switch(props: IconComponentProps) {
  return <Icon path={mdiSwitch} {...props} />;
}

export { mdiSwitch as path };
