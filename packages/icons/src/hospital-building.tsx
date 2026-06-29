import { mdiHospitalBuilding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HospitalBuilding(props: IconComponentProps) {
  return <Icon path={mdiHospitalBuilding} {...props} />;
}

export { mdiHospitalBuilding as path };
