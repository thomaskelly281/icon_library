import { mdiTooltipOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipOutline} {...props} />;
}

export { mdiTooltipOutline as path };
