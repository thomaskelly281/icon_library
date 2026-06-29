import { mdiSimpleIcons } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SimpleIcons(props: IconComponentProps) {
  return <Icon path={mdiSimpleIcons} {...props} />;
}

export { mdiSimpleIcons as path };
