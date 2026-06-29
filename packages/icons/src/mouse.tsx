import { mdiMouse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mouse(props: IconComponentProps) {
  return <Icon path={mdiMouse} {...props} />;
}

export { mdiMouse as path };
