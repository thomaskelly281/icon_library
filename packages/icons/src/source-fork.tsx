import { mdiSourceFork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourceFork(props: IconComponentProps) {
  return <Icon path={mdiSourceFork} {...props} />;
}

export { mdiSourceFork as path };
