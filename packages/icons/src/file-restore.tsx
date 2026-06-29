import { mdiFileRestore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRestore(props: IconComponentProps) {
  return <Icon path={mdiFileRestore} {...props} />;
}

export { mdiFileRestore as path };
