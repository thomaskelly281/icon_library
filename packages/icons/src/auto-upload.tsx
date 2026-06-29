import { mdiAutoUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AutoUpload(props: IconComponentProps) {
  return <Icon path={mdiAutoUpload} {...props} />;
}

export { mdiAutoUpload as path };
