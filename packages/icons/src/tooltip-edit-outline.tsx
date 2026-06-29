import { mdiTooltipEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipEditOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipEditOutline} {...props} />;
}

export { mdiTooltipEditOutline as path };
