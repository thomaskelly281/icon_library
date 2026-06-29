import { mdiMedication } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Medication(props: IconComponentProps) {
  return <Icon path={mdiMedication} {...props} />;
}

export { mdiMedication as path };
