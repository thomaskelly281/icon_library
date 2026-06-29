import { mdiGantryCrane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GantryCrane(props: IconComponentProps) {
  return <Icon path={mdiGantryCrane} {...props} />;
}

export { mdiGantryCrane as path };
