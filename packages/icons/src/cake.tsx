import { mdiCake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cake(props: IconComponentProps) {
  return <Icon path={mdiCake} {...props} />;
}

export { mdiCake as path };
