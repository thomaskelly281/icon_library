import { mdiCarCruiseControl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarCruiseControl(props: IconComponentProps) {
  return <Icon path={mdiCarCruiseControl} {...props} />;
}

export { mdiCarCruiseControl as path };
