import { mdiTruckAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckAlert(props: IconComponentProps) {
  return <Icon path={mdiTruckAlert} {...props} />;
}

export { mdiTruckAlert as path };
