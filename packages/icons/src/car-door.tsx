import { mdiCarDoor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarDoor(props: IconComponentProps) {
  return <Icon path={mdiCarDoor} {...props} />;
}

export { mdiCarDoor as path };
