import { mdiDiceMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceMultiple(props: IconComponentProps) {
  return <Icon path={mdiDiceMultiple} {...props} />;
}

export { mdiDiceMultiple as path };
