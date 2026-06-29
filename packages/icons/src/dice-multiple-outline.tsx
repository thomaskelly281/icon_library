import { mdiDiceMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiceMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiDiceMultipleOutline} {...props} />;
}

export { mdiDiceMultipleOutline as path };
