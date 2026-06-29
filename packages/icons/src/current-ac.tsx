import { mdiCurrentAc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrentAc(props: IconComponentProps) {
  return <Icon path={mdiCurrentAc} {...props} />;
}

export { mdiCurrentAc as path };
