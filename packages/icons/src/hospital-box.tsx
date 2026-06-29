import { mdiHospitalBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HospitalBox(props: IconComponentProps) {
  return <Icon path={mdiHospitalBox} {...props} />;
}

export { mdiHospitalBox as path };
