import { mdiTooltipMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipMinusOutline} {...props} />;
}

export { mdiTooltipMinusOutline as path };
