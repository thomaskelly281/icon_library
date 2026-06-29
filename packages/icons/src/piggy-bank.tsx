import { mdiPiggyBank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PiggyBank(props: IconComponentProps) {
  return <Icon path={mdiPiggyBank} {...props} />;
}

export { mdiPiggyBank as path };
