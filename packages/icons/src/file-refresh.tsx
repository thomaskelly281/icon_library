import { mdiFileRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRefresh(props: IconComponentProps) {
  return <Icon path={mdiFileRefresh} {...props} />;
}

export { mdiFileRefresh as path };
