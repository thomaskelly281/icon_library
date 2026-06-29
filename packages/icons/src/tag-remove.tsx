import { mdiTagRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagRemove(props: IconComponentProps) {
  return <Icon path={mdiTagRemove} {...props} />;
}

export { mdiTagRemove as path };
