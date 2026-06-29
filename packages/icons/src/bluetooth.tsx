import { mdiBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bluetooth(props: IconComponentProps) {
  return <Icon path={mdiBluetooth} {...props} />;
}

export { mdiBluetooth as path };
