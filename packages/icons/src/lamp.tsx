import { mdiLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lamp(props: IconComponentProps) {
  return <Icon path={mdiLamp} {...props} />;
}

export { mdiLamp as path };
