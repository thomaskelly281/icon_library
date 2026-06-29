import { mdiFileDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDownload(props: IconComponentProps) {
  return <Icon path={mdiFileDownload} {...props} />;
}

export { mdiFileDownload as path };
