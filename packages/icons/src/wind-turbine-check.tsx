import { mdiWindTurbineCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindTurbineCheck(props: IconComponentProps) {
  return <Icon path={mdiWindTurbineCheck} {...props} />;
}

export { mdiWindTurbineCheck as path };
