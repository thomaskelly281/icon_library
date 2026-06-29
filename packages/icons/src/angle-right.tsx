import { mdiAngleRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AngleRight(props: IconComponentProps) {
  return <Icon path={mdiAngleRight} {...props} />;
}

export { mdiAngleRight as path };
