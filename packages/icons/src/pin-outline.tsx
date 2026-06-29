import { mdiPinOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PinOutline(props: IconComponentProps) {
  return <Icon path={mdiPinOutline} {...props} />;
}

export { mdiPinOutline as path };
