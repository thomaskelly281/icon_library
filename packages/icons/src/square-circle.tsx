import { mdiSquareCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareCircle(props: IconComponentProps) {
  return <Icon path={mdiSquareCircle} {...props} />;
}

export { mdiSquareCircle as path };
