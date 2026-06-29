import { mdiTooltipRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipRemove(props: IconComponentProps) {
  return <Icon path={mdiTooltipRemove} {...props} />;
}

export { mdiTooltipRemove as path };
