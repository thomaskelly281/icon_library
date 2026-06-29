import { mdiDiceD10 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceD10(props: IconComponentProps) {
  return <Icon path={mdiDiceD10} {...props} />;
}

export { mdiDiceD10 as path };
