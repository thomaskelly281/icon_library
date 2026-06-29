import { mdiToggleSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToggleSwitch(props: IconComponentProps) {
  return <Icon path={mdiToggleSwitch} {...props} />;
}

export { mdiToggleSwitch as path };
