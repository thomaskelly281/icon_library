import { mdiTooltipCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipCheckOutline} {...props} />;
}

export { mdiTooltipCheckOutline as path };
