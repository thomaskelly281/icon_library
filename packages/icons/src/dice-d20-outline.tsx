import { mdiDiceD20Outline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceD20Outline(props: IconComponentProps) {
  return <Icon path={mdiDiceD20Outline} {...props} />;
}

export { mdiDiceD20Outline as path };
