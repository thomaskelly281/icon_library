import { mdiCheeseOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheeseOff(props: IconComponentProps) {
  return <Icon path={mdiCheeseOff} {...props} />;
}

export { mdiCheeseOff as path };
