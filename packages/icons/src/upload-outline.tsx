import { mdiUploadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadOutline(props: IconComponentProps) {
  return <Icon path={mdiUploadOutline} {...props} />;
}

export { mdiUploadOutline as path };
