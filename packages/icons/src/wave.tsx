import { mdiWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wave(props: IconComponentProps) {
  return <Icon path={mdiWave} {...props} />;
}

export { mdiWave as path };
