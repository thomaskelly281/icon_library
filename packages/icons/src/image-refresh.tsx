import { mdiImageRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageRefresh(props: IconComponentProps) {
  return <Icon path={mdiImageRefresh} {...props} />;
}

export { mdiImageRefresh as path };
