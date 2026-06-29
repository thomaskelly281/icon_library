import { mdiBookMinusMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMinusMultiple(props: IconComponentProps) {
  return <Icon path={mdiBookMinusMultiple} {...props} />;
}

export { mdiBookMinusMultiple as path };
