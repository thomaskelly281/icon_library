import { mdiFolderAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FolderAccount(props: IconComponentProps) {
  return <Icon path={mdiFolderAccount} {...props} />;
}

export { mdiFolderAccount as path };
