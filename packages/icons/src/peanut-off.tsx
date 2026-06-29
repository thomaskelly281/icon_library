import { mdiPeanutOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PeanutOff(props: IconComponentProps) {
  return <Icon path={mdiPeanutOff} {...props} />;
}

export { mdiPeanutOff as path };
