import { mdiMagnifyMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyMinus(props: IconComponentProps) {
  return <Icon path={mdiMagnifyMinus} {...props} />;
}

export { mdiMagnifyMinus as path };
