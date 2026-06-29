import { mdiMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Minus(props: IconComponentProps) {
  return <Icon path={mdiMinus} {...props} />;
}

export { mdiMinus as path };
