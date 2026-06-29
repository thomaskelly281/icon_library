import { mdiShipWheel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShipWheel(props: IconComponentProps) {
  return <Icon path={mdiShipWheel} {...props} />;
}

export { mdiShipWheel as path };
