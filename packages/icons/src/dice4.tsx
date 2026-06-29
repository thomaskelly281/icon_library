import { mdiDice4 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dice4(props: IconComponentProps) {
  return <Icon path={mdiDice4} {...props} />;
}

export { mdiDice4 as path };
