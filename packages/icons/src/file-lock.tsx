import { mdiFileLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileLock(props: IconComponentProps) {
  return <Icon path={mdiFileLock} {...props} />;
}

export { mdiFileLock as path };
