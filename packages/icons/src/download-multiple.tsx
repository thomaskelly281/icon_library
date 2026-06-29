import { mdiDownloadMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadMultiple(props: IconComponentProps) {
  return <Icon path={mdiDownloadMultiple} {...props} />;
}

export { mdiDownloadMultiple as path };
