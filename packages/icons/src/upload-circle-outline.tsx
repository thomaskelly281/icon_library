import { mdiUploadCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiUploadCircleOutline} {...props} />;
}

export { mdiUploadCircleOutline as path };
