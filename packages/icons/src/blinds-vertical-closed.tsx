import { mdiBlindsVerticalClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlindsVerticalClosed(props: IconComponentProps) {
  return <Icon path={mdiBlindsVerticalClosed} {...props} />;
}

export { mdiBlindsVerticalClosed as path };
