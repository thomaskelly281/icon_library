import { mdiSackPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SackPercent(props: IconComponentProps) {
  return <Icon path={mdiSackPercent} {...props} />;
}

export { mdiSackPercent as path };
