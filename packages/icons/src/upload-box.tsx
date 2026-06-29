import { mdiUploadBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadBox(props: IconComponentProps) {
  return <Icon path={mdiUploadBox} {...props} />;
}

export { mdiUploadBox as path };
