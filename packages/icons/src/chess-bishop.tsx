import { mdiChessBishop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChessBishop(props: IconComponentProps) {
  return <Icon path={mdiChessBishop} {...props} />;
}

export { mdiChessBishop as path };
