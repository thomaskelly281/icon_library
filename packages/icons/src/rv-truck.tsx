import { mdiRvTruck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RvTruck(props: IconComponentProps) {
  return <Icon path={mdiRvTruck} {...props} />;
}

export { mdiRvTruck as path };
