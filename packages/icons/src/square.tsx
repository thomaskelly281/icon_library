import { mdiSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Square(props: IconComponentProps) {
  return <Icon path={mdiSquare} {...props} />;
}

export { mdiSquare as path };
