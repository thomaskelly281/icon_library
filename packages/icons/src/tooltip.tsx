import { mdiTooltip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tooltip(props: IconComponentProps) {
  return <Icon path={mdiTooltip} {...props} />;
}

export { mdiTooltip as path };
