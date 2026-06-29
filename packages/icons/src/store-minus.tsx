import { mdiStoreMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreMinus(props: IconComponentProps) {
  return <Icon path={mdiStoreMinus} {...props} />;
}

export { mdiStoreMinus as path };
