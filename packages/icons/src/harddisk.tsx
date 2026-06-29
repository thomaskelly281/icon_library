import { mdiHarddisk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Harddisk(props: IconComponentProps) {
  return <Icon path={mdiHarddisk} {...props} />;
}

export { mdiHarddisk as path };
