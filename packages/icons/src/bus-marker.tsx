import { mdiBusMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BusMarker(props: IconComponentProps) {
  return <Icon path={mdiBusMarker} {...props} />;
}

export { mdiBusMarker as path };
