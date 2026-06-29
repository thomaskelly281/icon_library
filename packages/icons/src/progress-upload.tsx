import { mdiProgressUpload } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressUpload(props: IconComponentProps) {
  return <Icon path={mdiProgressUpload} {...props} />;
}

export { mdiProgressUpload as path };
