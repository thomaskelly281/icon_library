import { mdiUploadMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiUploadMultipleOutline} {...props} />;
}

export { mdiUploadMultipleOutline as path };
