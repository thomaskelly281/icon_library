import { mdiDogSide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DogSide(props: IconComponentProps) {
  return <Icon path={mdiDogSide} {...props} />;
}

export { mdiDogSide as path };
