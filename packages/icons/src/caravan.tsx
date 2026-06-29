import { mdiCaravan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Caravan(props: IconComponentProps) {
  return <Icon path={mdiCaravan} {...props} />;
}

export { mdiCaravan as path };
