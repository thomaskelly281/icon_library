import { mdiMathCompass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MathCompass(props: IconComponentProps) {
  return <Icon path={mdiMathCompass} {...props} />;
}

export { mdiMathCompass as path };
