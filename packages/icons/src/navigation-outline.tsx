import { mdiNavigationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NavigationOutline(props: IconComponentProps) {
  return <Icon path={mdiNavigationOutline} {...props} />;
}

export { mdiNavigationOutline as path };
