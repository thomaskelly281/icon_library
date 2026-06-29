import { mdiCarWash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarWash(props: IconComponentProps) {
  return <Icon path={mdiCarWash} {...props} />;
}

export { mdiCarWash as path };
