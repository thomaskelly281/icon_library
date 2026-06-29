import { mdiDiceD20 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceD20(props: IconComponentProps) {
  return <Icon path={mdiDiceD20} {...props} />;
}

export { mdiDiceD20 as path };
