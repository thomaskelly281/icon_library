import { mdiBatteryHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryHeart(props: IconComponentProps) {
  return <Icon path={mdiBatteryHeart} {...props} />;
}

export { mdiBatteryHeart as path };
