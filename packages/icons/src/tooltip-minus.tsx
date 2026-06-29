import { mdiTooltipMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipMinus(props: IconComponentProps) {
  return <Icon path={mdiTooltipMinus} {...props} />;
}

export { mdiTooltipMinus as path };
