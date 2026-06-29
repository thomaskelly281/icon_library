import { mdiHandWater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandWater(props: IconComponentProps) {
  return <Icon path={mdiHandWater} {...props} />;
}

export { mdiHandWater as path };
