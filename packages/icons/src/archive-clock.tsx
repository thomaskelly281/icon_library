import { mdiArchiveClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveClock(props: IconComponentProps) {
  return <Icon path={mdiArchiveClock} {...props} />;
}

export { mdiArchiveClock as path };
