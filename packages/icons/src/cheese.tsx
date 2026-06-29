import { mdiCheese } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cheese(props: IconComponentProps) {
  return <Icon path={mdiCheese} {...props} />;
}

export { mdiCheese as path };
