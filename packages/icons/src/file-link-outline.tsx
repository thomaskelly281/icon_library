import { mdiFileLinkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileLinkOutline(props: IconComponentProps) {
  return <Icon path={mdiFileLinkOutline} {...props} />;
}

export { mdiFileLinkOutline as path };
