import { mdiMinusBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusBox(props: IconComponentProps) {
  return <Icon path={mdiMinusBox} {...props} />;
}

export { mdiMinusBox as path };
