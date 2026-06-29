import { mdiPlusMinusBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusMinusBox(props: IconComponentProps) {
  return <Icon path={mdiPlusMinusBox} {...props} />;
}

export { mdiPlusMinusBox as path };
