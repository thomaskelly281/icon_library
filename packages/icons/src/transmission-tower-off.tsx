import { mdiTransmissionTowerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransmissionTowerOff(props: IconComponentProps) {
  return <Icon path={mdiTransmissionTowerOff} {...props} />;
}

export { mdiTransmissionTowerOff as path };
