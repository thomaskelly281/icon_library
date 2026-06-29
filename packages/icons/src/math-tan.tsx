import { mdiMathTan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathTan(props: IconComponentProps) {
  return <Icon path={mdiMathTan} {...props} />;
}

export { mdiMathTan as path };
