import { mdiCarWindshield } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarWindshield(props: IconComponentProps) {
  return <Icon path={mdiCarWindshield} {...props} />;
}

export { mdiCarWindshield as path };
