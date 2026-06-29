import { mdiTooltipImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TooltipImage(props: IconComponentProps) {
  return <Icon path={mdiTooltipImage} {...props} />;
}

export { mdiTooltipImage as path };
