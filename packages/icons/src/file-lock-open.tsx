import { mdiFileLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileLockOpen(props: IconComponentProps) {
  return <Icon path={mdiFileLockOpen} {...props} />;
}

export { mdiFileLockOpen as path };
