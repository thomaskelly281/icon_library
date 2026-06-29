import { mdiDivingScubaMask } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DivingScubaMask(props: IconComponentProps) {
  return <Icon path={mdiDivingScubaMask} {...props} />;
}

export { mdiDivingScubaMask as path };
