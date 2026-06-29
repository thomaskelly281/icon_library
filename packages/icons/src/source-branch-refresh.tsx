import { mdiSourceBranchRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranchRefresh(props: IconComponentProps) {
  return <Icon path={mdiSourceBranchRefresh} {...props} />;
}

export { mdiSourceBranchRefresh as path };
