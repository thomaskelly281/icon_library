import { mdiBilliardsRack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BilliardsRack(props: IconComponentProps) {
  return <Icon path={mdiBilliardsRack} {...props} />;
}

export { mdiBilliardsRack as path };
