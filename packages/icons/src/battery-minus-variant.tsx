import { mdiBatteryMinusVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryMinusVariant(props: IconComponentProps) {
  return <Icon path={mdiBatteryMinusVariant} {...props} />;
}

export { mdiBatteryMinusVariant as path };
