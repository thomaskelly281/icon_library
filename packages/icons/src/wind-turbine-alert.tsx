import { mdiWindTurbineAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindTurbineAlert(props: IconComponentProps) {
  return <Icon path={mdiWindTurbineAlert} {...props} />;
}

export { mdiWindTurbineAlert as path };
