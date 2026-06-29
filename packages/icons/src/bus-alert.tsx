import { mdiBusAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusAlert(props: IconComponentProps) {
  return <Icon path={mdiBusAlert} {...props} />;
}

export { mdiBusAlert as path };
