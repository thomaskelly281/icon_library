import { mdiNavigationVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NavigationVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiNavigationVariantOutline} {...props} />;
}

export { mdiNavigationVariantOutline as path };
