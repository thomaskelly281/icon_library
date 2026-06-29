import { mdiBusDoubleDecker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusDoubleDecker(props: IconComponentProps) {
  return <Icon path={mdiBusDoubleDecker} {...props} />;
}

export { mdiBusDoubleDecker as path };
