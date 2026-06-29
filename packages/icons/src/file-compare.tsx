import { mdiFileCompare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCompare(props: IconComponentProps) {
  return <Icon path={mdiFileCompare} {...props} />;
}

export { mdiFileCompare as path };
