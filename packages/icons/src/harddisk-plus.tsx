import { mdiHarddiskPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HarddiskPlus(props: IconComponentProps) {
  return <Icon path={mdiHarddiskPlus} {...props} />;
}

export { mdiHarddiskPlus as path };
