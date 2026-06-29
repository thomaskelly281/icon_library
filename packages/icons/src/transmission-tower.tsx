import { mdiTransmissionTower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransmissionTower(props: IconComponentProps) {
  return <Icon path={mdiTransmissionTower} {...props} />;
}

export { mdiTransmissionTower as path };
