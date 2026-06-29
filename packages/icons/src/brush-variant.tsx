import { mdiBrushVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BrushVariant(props: IconComponentProps) {
  return <Icon path={mdiBrushVariant} {...props} />;
}

export { mdiBrushVariant as path };
