import { mdiPinwheel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pinwheel(props: IconComponentProps) {
  return <Icon path={mdiPinwheel} {...props} />;
}

export { mdiPinwheel as path };
