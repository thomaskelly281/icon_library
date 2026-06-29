import { mdiUploadMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UploadMultiple(props: IconComponentProps) {
  return <Icon path={mdiUploadMultiple} {...props} />;
}

export { mdiUploadMultiple as path };
