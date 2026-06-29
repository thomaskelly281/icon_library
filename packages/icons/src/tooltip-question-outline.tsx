import { mdiTooltipQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiTooltipQuestionOutline} {...props} />;
}

export { mdiTooltipQuestionOutline as path };
