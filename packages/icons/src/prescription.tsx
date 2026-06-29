import { mdiPrescription } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Prescription(props: IconComponentProps) {
  return <Icon path={mdiPrescription} {...props} />;
}

export { mdiPrescription as path };
