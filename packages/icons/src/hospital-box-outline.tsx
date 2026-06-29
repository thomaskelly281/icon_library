import { mdiHospitalBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HospitalBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiHospitalBoxOutline} {...props} />;
}

export { mdiHospitalBoxOutline as path };
