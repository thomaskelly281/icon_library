import { mdiWifi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wifi(props: IconComponentProps) {
  return <Icon path={mdiWifi} {...props} />;
}

export { mdiWifi as path };
