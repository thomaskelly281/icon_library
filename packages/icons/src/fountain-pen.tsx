import { mdiFountainPen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FountainPen(props: IconComponentProps) {
  return <Icon path={mdiFountainPen} {...props} />;
}

export { mdiFountainPen as path };
