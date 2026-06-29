import { mdiPackage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Package(props: IconComponentProps) {
  return <Icon path={mdiPackage} {...props} />;
}

export { mdiPackage as path };
