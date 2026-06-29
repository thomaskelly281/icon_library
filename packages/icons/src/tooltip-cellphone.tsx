import { mdiTooltipCellphone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipCellphone(props: IconComponentProps) {
  return <Icon path={mdiTooltipCellphone} {...props} />;
}

export { mdiTooltipCellphone as path };
