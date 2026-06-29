import { mdiMinusThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusThick(props: IconComponentProps) {
  return <Icon path={mdiMinusThick} {...props} />;
}

export { mdiMinusThick as path };
