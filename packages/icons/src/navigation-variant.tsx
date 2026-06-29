import { mdiNavigationVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NavigationVariant(props: IconComponentProps) {
  return <Icon path={mdiNavigationVariant} {...props} />;
}

export { mdiNavigationVariant as path };
