import { mdiPackageUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageUp(props: IconComponentProps) {
  return <Icon path={mdiPackageUp} {...props} />;
}

export { mdiPackageUp as path };
