import { mdiArchiveOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveOff(props: IconComponentProps) {
  return <Icon path={mdiArchiveOff} {...props} />;
}

export { mdiArchiveOff as path };
