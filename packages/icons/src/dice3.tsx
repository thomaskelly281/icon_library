import { mdiDice3 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dice3(props: IconComponentProps) {
  return <Icon path={mdiDice3} {...props} />;
}

export { mdiDice3 as path };
