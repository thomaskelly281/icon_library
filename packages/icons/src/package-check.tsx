import { mdiPackageCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageCheck(props: IconComponentProps) {
  return <Icon path={mdiPackageCheck} {...props} />;
}

export { mdiPackageCheck as path };
