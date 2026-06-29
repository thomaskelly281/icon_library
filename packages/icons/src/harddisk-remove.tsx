import { mdiHarddiskRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HarddiskRemove(props: IconComponentProps) {
  return <Icon path={mdiHarddiskRemove} {...props} />;
}

export { mdiHarddiskRemove as path };
