import { mdiFountainPenTip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FountainPenTip(props: IconComponentProps) {
  return <Icon path={mdiFountainPenTip} {...props} />;
}

export { mdiFountainPenTip as path };
