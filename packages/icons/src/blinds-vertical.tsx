import { mdiBlindsVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlindsVertical(props: IconComponentProps) {
  return <Icon path={mdiBlindsVertical} {...props} />;
}

export { mdiBlindsVertical as path };
