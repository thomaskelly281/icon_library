import { mdiSourceBranch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceBranch(props: IconComponentProps) {
  return <Icon path={mdiSourceBranch} {...props} />;
}

export { mdiSourceBranch as path };
