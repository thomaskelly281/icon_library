import { mdiSelectColor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectColor(props: IconComponentProps) {
  return <Icon path={mdiSelectColor} {...props} />;
}

export { mdiSelectColor as path };
