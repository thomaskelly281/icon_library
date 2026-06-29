import { mdiBlindsHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BlindsHorizontal(props: IconComponentProps) {
  return <Icon path={mdiBlindsHorizontal} {...props} />;
}

export { mdiBlindsHorizontal as path };
