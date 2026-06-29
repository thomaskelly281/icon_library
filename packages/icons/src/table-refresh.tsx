import { mdiTableRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableRefresh(props: IconComponentProps) {
  return <Icon path={mdiTableRefresh} {...props} />;
}

export { mdiTableRefresh as path };
