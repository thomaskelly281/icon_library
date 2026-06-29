import { mdiHydrogenStation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HydrogenStation(props: IconComponentProps) {
  return <Icon path={mdiHydrogenStation} {...props} />;
}

export { mdiHydrogenStation as path };
