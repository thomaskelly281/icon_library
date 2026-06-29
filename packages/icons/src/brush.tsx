import { mdiBrush } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Brush(props: IconComponentProps) {
  return <Icon path={mdiBrush} {...props} />;
}

export { mdiBrush as path };
