import { mdiTooltipImageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipImageOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipImageOutline} {...props} />;
}

export { mdiTooltipImageOutline as path };
