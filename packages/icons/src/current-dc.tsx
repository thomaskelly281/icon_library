import { mdiCurrentDc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrentDc(props: IconComponentProps) {
  return <Icon path={mdiCurrentDc} {...props} />;
}

export { mdiCurrentDc as path };
