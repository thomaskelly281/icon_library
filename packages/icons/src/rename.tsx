import { mdiRename } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rename(props: IconComponentProps) {
  return <Icon path={mdiRename} {...props} />;
}

export { mdiRename as path };
