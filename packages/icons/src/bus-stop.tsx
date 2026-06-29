import { mdiBusStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusStop(props: IconComponentProps) {
  return <Icon path={mdiBusStop} {...props} />;
}

export { mdiBusStop as path };
