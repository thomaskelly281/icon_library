import { mdiFood } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Food(props: IconComponentProps) {
  return <Icon path={mdiFood} {...props} />;
}

export { mdiFood as path };
