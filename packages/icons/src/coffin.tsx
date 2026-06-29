import { mdiCoffin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Coffin(props: IconComponentProps) {
  return <Icon path={mdiCoffin} {...props} />;
}

export { mdiCoffin as path };
