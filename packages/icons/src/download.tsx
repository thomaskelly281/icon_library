import { mdiDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Download(props: IconComponentProps) {
  return <Icon path={mdiDownload} {...props} />;
}

export { mdiDownload as path };
