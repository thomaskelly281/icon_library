import { mdiSawtoothWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SawtoothWave(props: IconComponentProps) {
  return <Icon path={mdiSawtoothWave} {...props} />;
}

export { mdiSawtoothWave as path };
