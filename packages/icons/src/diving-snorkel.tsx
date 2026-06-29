import { mdiDivingSnorkel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingSnorkel(props: IconComponentProps) {
  return <Icon path={mdiDivingSnorkel} {...props} />;
}

export { mdiDivingSnorkel as path };
