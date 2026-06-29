import { mdiChessQueen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChessQueen(props: IconComponentProps) {
  return <Icon path={mdiChessQueen} {...props} />;
}

export { mdiChessQueen as path };
