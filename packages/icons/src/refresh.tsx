import { mdiRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Refresh(props: IconComponentProps) {
  return <Icon path={mdiRefresh} {...props} />;
}

export { mdiRefresh as path };
