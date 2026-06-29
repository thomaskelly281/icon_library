import { mdiUploadBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiUploadBoxOutline} {...props} />;
}

export { mdiUploadBoxOutline as path };
