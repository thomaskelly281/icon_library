import { mdiChessKing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChessKing(props: IconComponentProps) {
  return <Icon path={mdiChessKing} {...props} />;
}

export { mdiChessKing as path };
