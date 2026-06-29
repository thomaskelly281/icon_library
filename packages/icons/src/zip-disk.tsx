import { mdiZipDisk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZipDisk(props: IconComponentProps) {
  return <Icon path={mdiZipDisk} {...props} />;
}

export { mdiZipDisk as path };
