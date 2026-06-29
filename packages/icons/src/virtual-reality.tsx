import { mdiVirtualReality } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VirtualReality(props: IconComponentProps) {
  return <Icon path={mdiVirtualReality} {...props} />;
}

export { mdiVirtualReality as path };
