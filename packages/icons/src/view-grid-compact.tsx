import { mdiViewGridCompact } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGridCompact(props: IconComponentProps) {
  return <Icon path={mdiViewGridCompact} {...props} />;
}

export { mdiViewGridCompact as path };
