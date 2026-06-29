import { mdiPowershell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Powershell(props: IconComponentProps) {
  return <Icon path={mdiPowershell} {...props} />;
}

export { mdiPowershell as path };
