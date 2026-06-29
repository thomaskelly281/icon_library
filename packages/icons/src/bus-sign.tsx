import { mdiBusSign } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusSign(props: IconComponentProps) {
  return <Icon path={mdiBusSign} {...props} />;
}

export { mdiBusSign as path };
