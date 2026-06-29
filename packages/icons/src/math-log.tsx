import { mdiMathLog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathLog(props: IconComponentProps) {
  return <Icon path={mdiMathLog} {...props} />;
}

export { mdiMathLog as path };
