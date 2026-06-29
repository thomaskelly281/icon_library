import { mdiStorefrontCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiStorefrontCheckOutline} {...props} />;
}

export { mdiStorefrontCheckOutline as path };
