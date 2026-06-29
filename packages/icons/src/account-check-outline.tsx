import { mdiAccountCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCheckOutline} {...props} />;
}

export { mdiAccountCheckOutline as path };
