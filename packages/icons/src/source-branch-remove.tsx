import { mdiSourceBranchRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranchRemove(props: IconComponentProps) {
  return <Icon path={mdiSourceBranchRemove} {...props} />;
}

export { mdiSourceBranchRemove as path };
