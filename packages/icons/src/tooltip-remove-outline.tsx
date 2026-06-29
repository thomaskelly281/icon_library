import { mdiTooltipRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipRemoveOutline} {...props} />;
}

export { mdiTooltipRemoveOutline as path };
