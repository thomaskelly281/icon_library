import { mdiCar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Car(props: IconComponentProps) {
  return <Icon path={mdiCar} {...props} />;
}

export { mdiCar as path };
