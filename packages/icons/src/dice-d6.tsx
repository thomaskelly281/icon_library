import { mdiDiceD6 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceD6(props: IconComponentProps) {
  return <Icon path={mdiDiceD6} {...props} />;
}

export { mdiDiceD6 as path };
