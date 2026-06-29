import { mdiSsh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ssh(props: IconComponentProps) {
  return <Icon path={mdiSsh} {...props} />;
}

export { mdiSsh as path };
