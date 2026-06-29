import { mdiCpu32Bit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cpu32Bit(props: IconComponentProps) {
  return <Icon path={mdiCpu32Bit} {...props} />;
}

export { mdiCpu32Bit as path };
