import { mdiMessageSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageSettings(props: IconComponentProps) {
  return <Icon path={mdiMessageSettings} {...props} />;
}

export { mdiMessageSettings as path };
