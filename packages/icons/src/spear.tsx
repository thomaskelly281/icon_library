import { mdiSpear } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spear(props: IconComponentProps) {
  return <Icon path={mdiSpear} {...props} />;
}

export { mdiSpear as path };
