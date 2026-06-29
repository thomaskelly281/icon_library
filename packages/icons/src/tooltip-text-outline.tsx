import { mdiTooltipTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipTextOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipTextOutline} {...props} />;
}

export { mdiTooltipTextOutline as path };
