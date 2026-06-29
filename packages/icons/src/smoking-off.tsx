import { mdiSmokingOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmokingOff(props: IconComponentProps) {
  return <Icon path={mdiSmokingOff} {...props} />;
}

export { mdiSmokingOff as path };
