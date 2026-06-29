import { mdiTurbine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Turbine(props: IconComponentProps) {
  return <Icon path={mdiTurbine} {...props} />;
}

export { mdiTurbine as path };
