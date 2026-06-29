import { mdiCamcorderOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CamcorderOff(props: IconComponentProps) {
  return <Icon path={mdiCamcorderOff} {...props} />;
}

export { mdiCamcorderOff as path };
