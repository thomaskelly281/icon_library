import { mdiTruckCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckCheck(props: IconComponentProps) {
  return <Icon path={mdiTruckCheck} {...props} />;
}

export { mdiTruckCheck as path };
