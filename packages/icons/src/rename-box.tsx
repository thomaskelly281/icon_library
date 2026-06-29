import { mdiRenameBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RenameBox(props: IconComponentProps) {
  return <Icon path={mdiRenameBox} {...props} />;
}

export { mdiRenameBox as path };
