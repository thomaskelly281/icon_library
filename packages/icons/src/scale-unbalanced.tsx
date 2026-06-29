import { mdiScaleUnbalanced } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScaleUnbalanced(props: IconComponentProps) {
  return <Icon path={mdiScaleUnbalanced} {...props} />;
}

export { mdiScaleUnbalanced as path };
