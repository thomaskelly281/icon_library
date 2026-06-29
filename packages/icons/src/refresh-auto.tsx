import { mdiRefreshAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RefreshAuto(props: IconComponentProps) {
  return <Icon path={mdiRefreshAuto} {...props} />;
}

export { mdiRefreshAuto as path };
