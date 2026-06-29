import { mdiSim } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sim(props: IconComponentProps) {
  return <Icon path={mdiSim} {...props} />;
}

export { mdiSim as path };
