import { mdiRadiatorOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadiatorOff(props: IconComponentProps) {
  return <Icon path={mdiRadiatorOff} {...props} />;
}

export { mdiRadiatorOff as path };
