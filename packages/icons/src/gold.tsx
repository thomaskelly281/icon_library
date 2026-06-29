import { mdiGold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gold(props: IconComponentProps) {
  return <Icon path={mdiGold} {...props} />;
}

export { mdiGold as path };
