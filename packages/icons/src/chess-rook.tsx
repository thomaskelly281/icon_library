import { mdiChessRook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChessRook(props: IconComponentProps) {
  return <Icon path={mdiChessRook} {...props} />;
}

export { mdiChessRook as path };
