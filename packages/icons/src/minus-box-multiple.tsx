import { mdiMinusBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiMinusBoxMultiple} {...props} />;
}

export { mdiMinusBoxMultiple as path };
