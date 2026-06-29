import { mdiDiceD4 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceD4(props: IconComponentProps) {
  return <Icon path={mdiDiceD4} {...props} />;
}

export { mdiDiceD4 as path };
