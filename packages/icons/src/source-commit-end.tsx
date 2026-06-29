import { mdiSourceCommitEnd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceCommitEnd(props: IconComponentProps) {
  return <Icon path={mdiSourceCommitEnd} {...props} />;
}

export { mdiSourceCommitEnd as path };
