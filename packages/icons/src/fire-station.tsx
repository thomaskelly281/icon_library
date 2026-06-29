import { mdiFireStation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireStation(props: IconComponentProps) {
  return <Icon path={mdiFireStation} {...props} />;
}

export { mdiFireStation as path };
