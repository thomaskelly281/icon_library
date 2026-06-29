import { mdiFileLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiFileLockOpenOutline} {...props} />;
}

export { mdiFileLockOpenOutline as path };
