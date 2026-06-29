import { mdiMedicalBag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MedicalBag(props: IconComponentProps) {
  return <Icon path={mdiMedicalBag} {...props} />;
}

export { mdiMedicalBag as path };
