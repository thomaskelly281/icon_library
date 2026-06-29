import { mdiSymbol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Symbol(props: IconComponentProps) {
  return <Icon path={mdiSymbol} {...props} />;
}

export { mdiSymbol as path };
