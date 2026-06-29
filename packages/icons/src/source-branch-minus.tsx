import { mdiSourceBranchMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranchMinus(props: IconComponentProps) {
  return <Icon path={mdiSourceBranchMinus} {...props} />;
}

export { mdiSourceBranchMinus as path };
