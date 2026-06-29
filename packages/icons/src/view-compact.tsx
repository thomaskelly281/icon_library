import { mdiViewCompact } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewCompact(props: IconComponentProps) {
  return <Icon path={mdiViewCompact} {...props} />;
}

export { mdiViewCompact as path };
