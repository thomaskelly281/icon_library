import { mdiZWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZWave(props: IconComponentProps) {
  return <Icon path={mdiZWave} {...props} />;
}

export { mdiZWave as path };
