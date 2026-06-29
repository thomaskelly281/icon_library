import { mdiCity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function City(props: IconComponentProps) {
  return <Icon path={mdiCity} {...props} />;
}

export { mdiCity as path };
