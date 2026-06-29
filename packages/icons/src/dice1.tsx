import { mdiDice1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dice1(props: IconComponentProps) {
  return <Icon path={mdiDice1} {...props} />;
}

export { mdiDice1 as path };
