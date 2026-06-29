import { mdiCrystalBall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrystalBall(props: IconComponentProps) {
  return <Icon path={mdiCrystalBall} {...props} />;
}

export { mdiCrystalBall as path };
