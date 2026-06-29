import { mdiCoffee } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Coffee(props: IconComponentProps) {
  return <Icon path={mdiCoffee} {...props} />;
}

export { mdiCoffee as path };
