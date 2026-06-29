import { mdiCloudUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudUpload(props: IconComponentProps) {
  return <Icon path={mdiCloudUpload} {...props} />;
}

export { mdiCloudUpload as path };
