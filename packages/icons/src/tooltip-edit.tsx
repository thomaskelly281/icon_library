import { mdiTooltipEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipEdit(props: IconComponentProps) {
  return <Icon path={mdiTooltipEdit} {...props} />;
}

export { mdiTooltipEdit as path };
