import { mdiFileCloud } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCloud(props: IconComponentProps) {
  return <Icon path={mdiFileCloud} {...props} />;
}

export { mdiFileCloud as path };
