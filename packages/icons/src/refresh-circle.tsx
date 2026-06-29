import { mdiRefreshCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RefreshCircle(props: IconComponentProps) {
  return <Icon path={mdiRefreshCircle} {...props} />;
}

export { mdiRefreshCircle as path };
