import { mdiAccountMultipleCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultipleCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountMultipleCheckOutline} {...props} />;
}

export { mdiAccountMultipleCheckOutline as path };
