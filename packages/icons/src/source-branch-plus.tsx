import { mdiSourceBranchPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranchPlus(props: IconComponentProps) {
  return <Icon path={mdiSourceBranchPlus} {...props} />;
}

export { mdiSourceBranchPlus as path };
