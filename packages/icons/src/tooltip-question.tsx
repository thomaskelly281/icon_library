import { mdiTooltipQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipQuestion(props: IconComponentProps) {
  return <Icon path={mdiTooltipQuestion} {...props} />;
}

export { mdiTooltipQuestion as path };
