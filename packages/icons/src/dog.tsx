import { mdiDog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dog(props: IconComponentProps) {
  return <Icon path={mdiDog} {...props} />;
}

export { mdiDog as path };
