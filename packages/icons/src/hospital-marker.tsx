import { mdiHospitalMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HospitalMarker(props: IconComponentProps) {
  return <Icon path={mdiHospitalMarker} {...props} />;
}

export { mdiHospitalMarker as path };
