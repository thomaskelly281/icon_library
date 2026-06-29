import { mdiCpu64Bit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cpu64Bit(props: IconComponentProps) {
  return <Icon path={mdiCpu64Bit} {...props} />;
}

export { mdiCpu64Bit as path };
