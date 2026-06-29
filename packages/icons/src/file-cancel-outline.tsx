import { mdiFileCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiFileCancelOutline} {...props} />;
}

export { mdiFileCancelOutline as path };
