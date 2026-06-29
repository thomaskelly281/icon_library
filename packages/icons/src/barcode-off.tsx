import { mdiBarcodeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BarcodeOff(props: IconComponentProps) {
  return <Icon path={mdiBarcodeOff} {...props} />;
}

export { mdiBarcodeOff as path };
