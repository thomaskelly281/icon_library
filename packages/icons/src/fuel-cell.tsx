import { mdiFuelCell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FuelCell(props: IconComponentProps) {
  return <Icon path={mdiFuelCell} {...props} />;
}

export { mdiFuelCell as path };
