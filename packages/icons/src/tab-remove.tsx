import { mdiTabRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabRemove(props: IconComponentProps) {
  return <Icon path={mdiTabRemove} {...props} />;
}

export { mdiTabRemove as path };
