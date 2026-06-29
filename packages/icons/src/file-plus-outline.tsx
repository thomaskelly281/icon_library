import { mdiFilePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFilePlusOutline} {...props} />;
}

export { mdiFilePlusOutline as path };
