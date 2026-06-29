import { mdiTriangleWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TriangleWave(props: IconComponentProps) {
  return <Icon path={mdiTriangleWave} {...props} />;
}

export { mdiTriangleWave as path };
