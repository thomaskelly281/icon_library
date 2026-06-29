import { mdiTooltipPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipPlusOutline} {...props} />;
}

export { mdiTooltipPlusOutline as path };
