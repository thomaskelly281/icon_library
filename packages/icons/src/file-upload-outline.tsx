import { mdiFileUploadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileUploadOutline(props: IconComponentProps) {
  return <Icon path={mdiFileUploadOutline} {...props} />;
}

export { mdiFileUploadOutline as path };
