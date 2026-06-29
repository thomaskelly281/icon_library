import { mdiChessKnight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChessKnight(props: IconComponentProps) {
  return <Icon path={mdiChessKnight} {...props} />;
}

export { mdiChessKnight as path };
