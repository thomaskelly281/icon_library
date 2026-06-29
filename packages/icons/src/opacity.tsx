import { mdiOpacity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Opacity(props: IconComponentProps) {
  return <Icon path={mdiOpacity} {...props} />;
}

export { mdiOpacity as path };
