import { mdiSquareWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareWave(props: IconComponentProps) {
  return <Icon path={mdiSquareWave} {...props} />;
}

export { mdiSquareWave as path };
