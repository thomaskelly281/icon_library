import { mdiFoodTurkey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodTurkey(props: IconComponentProps) {
  return <Icon path={mdiFoodTurkey} {...props} />;
}

export { mdiFoodTurkey as path };
