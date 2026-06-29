import { mdiPackageVariantClosedCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantClosedCheck(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantClosedCheck} {...props} />;
}

export { mdiPackageVariantClosedCheck as path };
