import { mdiSack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sack(props: IconComponentProps) {
  return <Icon path={mdiSack} {...props} />;
}

export { mdiSack as path };
