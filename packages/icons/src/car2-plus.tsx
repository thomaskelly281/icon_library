import { mdiCar2Plus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Car2Plus(props: IconComponentProps) {
  return <Icon path={mdiCar2Plus} {...props} />;
}

export { mdiCar2Plus as path };
