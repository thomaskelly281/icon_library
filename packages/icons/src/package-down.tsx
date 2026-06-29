import { mdiPackageDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageDown(props: IconComponentProps) {
  return <Icon path={mdiPackageDown} {...props} />;
}

export { mdiPackageDown as path };
