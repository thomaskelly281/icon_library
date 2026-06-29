import { mdiFilter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Filter(props: IconComponentProps) {
  return <Icon path={mdiFilter} {...props} />;
}

export { mdiFilter as path };
