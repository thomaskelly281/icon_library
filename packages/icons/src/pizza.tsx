import { mdiPizza } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pizza(props: IconComponentProps) {
  return <Icon path={mdiPizza} {...props} />;
}

export { mdiPizza as path };
