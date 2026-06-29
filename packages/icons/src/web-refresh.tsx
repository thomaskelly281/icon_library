import { mdiWebRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebRefresh(props: IconComponentProps) {
  return <Icon path={mdiWebRefresh} {...props} />;
}

export { mdiWebRefresh as path };
