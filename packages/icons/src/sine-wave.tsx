import { mdiSineWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SineWave(props: IconComponentProps) {
  return <Icon path={mdiSineWave} {...props} />;
}

export { mdiSineWave as path };
