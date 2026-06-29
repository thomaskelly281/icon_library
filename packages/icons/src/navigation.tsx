import { mdiNavigation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Navigation(props: IconComponentProps) {
  return <Icon path={mdiNavigation} {...props} />;
}

export { mdiNavigation as path };
