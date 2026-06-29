import { mdiMagnifyPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyPlus(props: IconComponentProps) {
  return <Icon path={mdiMagnifyPlus} {...props} />;
}

export { mdiMagnifyPlus as path };
