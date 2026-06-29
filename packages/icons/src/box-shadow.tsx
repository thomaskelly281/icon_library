import { mdiBoxShadow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoxShadow(props: IconComponentProps) {
  return <Icon path={mdiBoxShadow} {...props} />;
}

export { mdiBoxShadow as path };
