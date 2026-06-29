import { mdiBackupRestore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BackupRestore(props: IconComponentProps) {
  return <Icon path={mdiBackupRestore} {...props} />;
}

export { mdiBackupRestore as path };
