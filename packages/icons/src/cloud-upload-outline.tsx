import { mdiCloudUploadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudUploadOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudUploadOutline} {...props} />;
}

export { mdiCloudUploadOutline as path };
