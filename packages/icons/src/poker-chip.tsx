import { mdiPokerChip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PokerChip(props: IconComponentProps) {
  return <Icon path={mdiPokerChip} {...props} />;
}

export { mdiPokerChip as path };
