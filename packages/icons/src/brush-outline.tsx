import { mdiBrushOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BrushOutline(props: IconComponentProps) {
  return <Icon path={mdiBrushOutline} {...props} />;
}

export { mdiBrushOutline as path };
