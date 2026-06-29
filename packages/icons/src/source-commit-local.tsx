import { mdiSourceCommitLocal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceCommitLocal(props: IconComponentProps) {
  return <Icon path={mdiSourceCommitLocal} {...props} />;
}

export { mdiSourceCommitLocal as path };
