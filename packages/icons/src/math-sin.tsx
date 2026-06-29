import { mdiMathSin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathSin(props: IconComponentProps) {
  return <Icon path={mdiMathSin} {...props} />;
}

export { mdiMathSin as path };
