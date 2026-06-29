import { mdiAntenna } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Antenna(props: IconComponentProps) {
  return <Icon path={mdiAntenna} {...props} />;
}

export { mdiAntenna as path };
