import { mdiCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckOutline} {...props} />;
}

export { mdiCheckOutline as path };
