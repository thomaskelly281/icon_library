import { mdiSourceCommit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceCommit(props: IconComponentProps) {
  return <Icon path={mdiSourceCommit} {...props} />;
}

export { mdiSourceCommit as path };
