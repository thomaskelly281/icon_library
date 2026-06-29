import { mdiHandWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandWave(props: IconComponentProps) {
  return <Icon path={mdiHandWave} {...props} />;
}

export { mdiHandWave as path };
