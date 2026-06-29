import { mdiDiceD8 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceD8(props: IconComponentProps) {
  return <Icon path={mdiDiceD8} {...props} />;
}

export { mdiDiceD8 as path };
