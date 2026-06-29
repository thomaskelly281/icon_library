import { mdiMathNorm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathNorm(props: IconComponentProps) {
  return <Icon path={mdiMathNorm} {...props} />;
}

export { mdiMathNorm as path };
