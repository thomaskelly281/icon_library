import { mdiCupcake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cupcake(props: IconComponentProps) {
  return <Icon path={mdiCupcake} {...props} />;
}

export { mdiCupcake as path };
