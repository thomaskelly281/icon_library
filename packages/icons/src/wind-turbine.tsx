import { mdiWindTurbine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindTurbine(props: IconComponentProps) {
  return <Icon path={mdiWindTurbine} {...props} />;
}

export { mdiWindTurbine as path };
