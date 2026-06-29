import { mdiTooltipPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipPlus(props: IconComponentProps) {
  return <Icon path={mdiTooltipPlus} {...props} />;
}

export { mdiTooltipPlus as path };
