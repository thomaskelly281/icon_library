import { mdiBlindsHorizontalClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlindsHorizontalClosed(props: IconComponentProps) {
  return <Icon path={mdiBlindsHorizontalClosed} {...props} />;
}

export { mdiBlindsHorizontalClosed as path };
