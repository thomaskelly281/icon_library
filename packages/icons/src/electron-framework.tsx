import { mdiElectronFramework } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElectronFramework(props: IconComponentProps) {
  return <Icon path={mdiElectronFramework} {...props} />;
}

export { mdiElectronFramework as path };
