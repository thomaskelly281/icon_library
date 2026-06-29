import { mdiStorefrontOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontOutline(props: IconComponentProps) {
  return <Icon path={mdiStorefrontOutline} {...props} />;
}

export { mdiStorefrontOutline as path };
