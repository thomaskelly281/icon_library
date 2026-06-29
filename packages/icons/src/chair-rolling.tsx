import { mdiChairRolling } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChairRolling(props: IconComponentProps) {
  return <Icon path={mdiChairRolling} {...props} />;
}

export { mdiChairRolling as path };
