import { mdiMagnifyExpand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyExpand(props: IconComponentProps) {
  return <Icon path={mdiMagnifyExpand} {...props} />;
}

export { mdiMagnifyExpand as path };
