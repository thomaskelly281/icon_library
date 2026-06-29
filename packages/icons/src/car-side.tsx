import { mdiCarSide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSide(props: IconComponentProps) {
  return <Icon path={mdiCarSide} {...props} />;
}

export { mdiCarSide as path };
