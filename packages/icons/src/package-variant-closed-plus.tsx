import { mdiPackageVariantClosedPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantClosedPlus(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantClosedPlus} {...props} />;
}

export { mdiPackageVariantClosedPlus as path };
