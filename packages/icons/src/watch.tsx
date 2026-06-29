import { mdiWatch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Watch(props: IconComponentProps) {
  return <Icon path={mdiWatch} {...props} />;
}

export { mdiWatch as path };
