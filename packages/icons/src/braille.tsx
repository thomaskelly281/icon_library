import { mdiBraille } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Braille(props: IconComponentProps) {
  return <Icon path={mdiBraille} {...props} />;
}

export { mdiBraille as path };
