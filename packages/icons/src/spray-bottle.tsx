import { mdiSprayBottle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SprayBottle(props: IconComponentProps) {
  return <Icon path={mdiSprayBottle} {...props} />;
}

export { mdiSprayBottle as path };
