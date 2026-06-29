import { mdiCar3Plus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Car3Plus(props: IconComponentProps) {
  return <Icon path={mdiCar3Plus} {...props} />;
}

export { mdiCar3Plus as path };
