import { mdiDivingScuba } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingScuba(props: IconComponentProps) {
  return <Icon path={mdiDivingScuba} {...props} />;
}

export { mdiDivingScuba as path };
