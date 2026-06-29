import { mdiBullseyeArrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BullseyeArrow(props: IconComponentProps) {
  return <Icon path={mdiBullseyeArrow} {...props} />;
}

export { mdiBullseyeArrow as path };
