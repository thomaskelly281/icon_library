import { mdiContainStart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContainStart(props: IconComponentProps) {
  return <Icon path={mdiContainStart} {...props} />;
}

export { mdiContainStart as path };
