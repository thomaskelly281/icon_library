import { mdiBusMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusMultiple(props: IconComponentProps) {
  return <Icon path={mdiBusMultiple} {...props} />;
}

export { mdiBusMultiple as path };
