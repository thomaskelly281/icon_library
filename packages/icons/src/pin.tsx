import { mdiPin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pin(props: IconComponentProps) {
  return <Icon path={mdiPin} {...props} />;
}

export { mdiPin as path };
