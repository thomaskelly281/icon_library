import { mdiTruckMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TruckMinus(props: IconComponentProps) {
  return <Icon path={mdiTruckMinus} {...props} />;
}

export { mdiTruckMinus as path };
