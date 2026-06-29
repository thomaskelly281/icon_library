import { mdiSourceCommitStart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceCommitStart(props: IconComponentProps) {
  return <Icon path={mdiSourceCommitStart} {...props} />;
}

export { mdiSourceCommitStart as path };
