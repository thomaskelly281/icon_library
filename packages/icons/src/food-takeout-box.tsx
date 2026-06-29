import { mdiFoodTakeoutBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodTakeoutBox(props: IconComponentProps) {
  return <Icon path={mdiFoodTakeoutBox} {...props} />;
}

export { mdiFoodTakeoutBox as path };
