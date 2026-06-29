import { mdiReload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Reload(props: IconComponentProps) {
  return <Icon path={mdiReload} {...props} />;
}

export { mdiReload as path };
