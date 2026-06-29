import { mdiDice2 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dice2(props: IconComponentProps) {
  return <Icon path={mdiDice2} {...props} />;
}

export { mdiDice2 as path };
