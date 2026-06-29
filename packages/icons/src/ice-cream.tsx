import { mdiIceCream } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IceCream(props: IconComponentProps) {
  return <Icon path={mdiIceCream} {...props} />;
}

export { mdiIceCream as path };
