import { mdiFilePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePlus(props: IconComponentProps) {
  return <Icon path={mdiFilePlus} {...props} />;
}

export { mdiFilePlus as path };
