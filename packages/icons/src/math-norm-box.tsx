import { mdiMathNormBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathNormBox(props: IconComponentProps) {
  return <Icon path={mdiMathNormBox} {...props} />;
}

export { mdiMathNormBox as path };
