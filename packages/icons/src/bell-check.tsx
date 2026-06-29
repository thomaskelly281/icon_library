import { mdiBellCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellCheck(props: IconComponentProps) {
  return <Icon path={mdiBellCheck} {...props} />;
}

export { mdiBellCheck as path };
