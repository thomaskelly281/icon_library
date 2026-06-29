import { mdiCarShiftPattern } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarShiftPattern(props: IconComponentProps) {
  return <Icon path={mdiCarShiftPattern} {...props} />;
}

export { mdiCarShiftPattern as path };
