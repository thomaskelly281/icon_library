import { mdiFileMoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFileMoveOutline} {...props} />;
}

export { mdiFileMoveOutline as path };
