import { mdiCloudOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudOff(props: IconComponentProps) {
  return <Icon path={mdiCloudOff} {...props} />;
}

export { mdiCloudOff as path };
