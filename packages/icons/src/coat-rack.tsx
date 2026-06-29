import { mdiCoatRack } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoatRack(props: IconComponentProps) {
  return <Icon path={mdiCoatRack} {...props} />;
}

export { mdiCoatRack as path };
