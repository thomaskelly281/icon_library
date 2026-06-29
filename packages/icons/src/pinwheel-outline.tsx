import { mdiPinwheelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PinwheelOutline(props: IconComponentProps) {
  return <Icon path={mdiPinwheelOutline} {...props} />;
}

export { mdiPinwheelOutline as path };
