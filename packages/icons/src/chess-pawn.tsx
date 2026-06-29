import { mdiChessPawn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChessPawn(props: IconComponentProps) {
  return <Icon path={mdiChessPawn} {...props} />;
}

export { mdiChessPawn as path };
