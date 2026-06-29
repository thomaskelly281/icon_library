import { mdiAutoDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AutoDownload(props: IconComponentProps) {
  return <Icon path={mdiAutoDownload} {...props} />;
}

export { mdiAutoDownload as path };
