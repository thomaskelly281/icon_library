import { mdiBusElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusElectric(props: IconComponentProps) {
  return <Icon path={mdiBusElectric} {...props} />;
}

export { mdiBusElectric as path };
