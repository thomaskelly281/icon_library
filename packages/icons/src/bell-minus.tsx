import { mdiBellMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellMinus(props: IconComponentProps) {
  return <Icon path={mdiBellMinus} {...props} />;
}

export { mdiBellMinus as path };
