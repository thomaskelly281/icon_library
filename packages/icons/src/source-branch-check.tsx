import { mdiSourceBranchCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranchCheck(props: IconComponentProps) {
  return <Icon path={mdiSourceBranchCheck} {...props} />;
}

export { mdiSourceBranchCheck as path };
