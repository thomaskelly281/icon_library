import { mdiWheelchairAccessibility } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WheelchairAccessibility(props: IconComponentProps) {
  return <Icon path={mdiWheelchairAccessibility} {...props} />;
}

export { mdiWheelchairAccessibility as path };
