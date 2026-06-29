import { mdiProgressDownload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressDownload(props: IconComponentProps) {
  return <Icon path={mdiProgressDownload} {...props} />;
}

export { mdiProgressDownload as path };
