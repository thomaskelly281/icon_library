import { mdiTooltipCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipCheck(props: IconComponentProps) {
  return <Icon path={mdiTooltipCheck} {...props} />;
}

export { mdiTooltipCheck as path };
