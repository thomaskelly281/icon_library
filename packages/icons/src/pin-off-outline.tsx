import { mdiPinOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PinOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPinOffOutline} {...props} />;
}

export { mdiPinOffOutline as path };
