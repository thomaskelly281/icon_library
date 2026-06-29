import { mdiTruckRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckRemove(props: IconComponentProps) {
  return <Icon path={mdiTruckRemove} {...props} />;
}

export { mdiTruckRemove as path };
