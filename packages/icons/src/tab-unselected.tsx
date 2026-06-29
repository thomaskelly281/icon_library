import { mdiTabUnselected } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabUnselected(props: IconComponentProps) {
  return <Icon path={mdiTabUnselected} {...props} />;
}

export { mdiTabUnselected as path };
