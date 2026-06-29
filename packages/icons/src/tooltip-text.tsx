import { mdiTooltipText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipText(props: IconComponentProps) {
  return <Icon path={mdiTooltipText} {...props} />;
}

export { mdiTooltipText as path };
