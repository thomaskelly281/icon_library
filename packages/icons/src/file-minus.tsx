import { mdiFileMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMinus(props: IconComponentProps) {
  return <Icon path={mdiFileMinus} {...props} />;
}

export { mdiFileMinus as path };
