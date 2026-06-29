import { mdiUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Upload(props: IconComponentProps) {
  return <Icon path={mdiUpload} {...props} />;
}

export { mdiUpload as path };
