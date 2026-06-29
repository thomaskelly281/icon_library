import { mdiFileLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileLockOutline(props: IconComponentProps) {
  return <Icon path={mdiFileLockOutline} {...props} />;
}

export { mdiFileLockOutline as path };
