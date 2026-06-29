import { mdiFileUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileUpload(props: IconComponentProps) {
  return <Icon path={mdiFileUpload} {...props} />;
}

export { mdiFileUpload as path };
