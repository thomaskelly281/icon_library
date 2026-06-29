import { mdiBullseye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bullseye(props: IconComponentProps) {
  return <Icon path={mdiBullseye} {...props} />;
}

export { mdiBullseye as path };
