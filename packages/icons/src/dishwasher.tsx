import { mdiDishwasher } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dishwasher(props: IconComponentProps) {
  return <Icon path={mdiDishwasher} {...props} />;
}

export { mdiDishwasher as path };
