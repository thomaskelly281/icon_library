import { mdiFileClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileClock(props: IconComponentProps) {
  return <Icon path={mdiFileClock} {...props} />;
}

export { mdiFileClock as path };
