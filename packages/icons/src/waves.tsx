import { mdiWaves } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Waves(props: IconComponentProps) {
  return <Icon path={mdiWaves} {...props} />;
}

export { mdiWaves as path };
