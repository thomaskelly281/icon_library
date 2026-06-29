import { mdiCosineWave } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CosineWave(props: IconComponentProps) {
  return <Icon path={mdiCosineWave} {...props} />;
}

export { mdiCosineWave as path };
