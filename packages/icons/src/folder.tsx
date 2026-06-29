import { mdiFolder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Folder(props: IconComponentProps) {
  return <Icon path={mdiFolder} {...props} />;
}

export { mdiFolder as path };
