import { mdiEvStation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EvStation(props: IconComponentProps) {
  return <Icon path={mdiEvStation} {...props} />;
}

export { mdiEvStation as path };
