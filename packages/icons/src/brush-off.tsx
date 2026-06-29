import { mdiBrushOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BrushOff(props: IconComponentProps) {
  return <Icon path={mdiBrushOff} {...props} />;
}

export { mdiBrushOff as path };
