import { mdiBusWrench } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusWrench(props: IconComponentProps) {
  return <Icon path={mdiBusWrench} {...props} />;
}

export { mdiBusWrench as path };
