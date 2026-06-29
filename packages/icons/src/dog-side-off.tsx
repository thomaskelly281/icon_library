import { mdiDogSideOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DogSideOff(props: IconComponentProps) {
  return <Icon path={mdiDogSideOff} {...props} />;
}

export { mdiDogSideOff as path };
