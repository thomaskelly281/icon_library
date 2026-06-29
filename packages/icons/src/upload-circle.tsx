import { mdiUploadCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadCircle(props: IconComponentProps) {
  return <Icon path={mdiUploadCircle} {...props} />;
}

export { mdiUploadCircle as path };
