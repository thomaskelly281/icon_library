import { mdiLinuxMint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinuxMint(props: IconComponentProps) {
  return <Icon path={mdiLinuxMint} {...props} />;
}

export { mdiLinuxMint as path };
