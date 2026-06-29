import { mdiMathCos } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathCos(props: IconComponentProps) {
  return <Icon path={mdiMathCos} {...props} />;
}

export { mdiMathCos as path };
