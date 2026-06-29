import { mdiCloudDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudDownload(props: IconComponentProps) {
  return <Icon path={mdiCloudDownload} {...props} />;
}

export { mdiCloudDownload as path };
