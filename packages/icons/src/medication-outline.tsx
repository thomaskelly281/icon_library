import { mdiMedicationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MedicationOutline(props: IconComponentProps) {
  return <Icon path={mdiMedicationOutline} {...props} />;
}

export { mdiMedicationOutline as path };
