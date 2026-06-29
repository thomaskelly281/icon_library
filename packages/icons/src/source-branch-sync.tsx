import { mdiSourceBranchSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranchSync(props: IconComponentProps) {
  return <Icon path={mdiSourceBranchSync} {...props} />;
}

export { mdiSourceBranchSync as path };
