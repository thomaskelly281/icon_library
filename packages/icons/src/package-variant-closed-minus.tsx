import { mdiPackageVariantClosedMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantClosedMinus(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantClosedMinus} {...props} />;
}

export { mdiPackageVariantClosedMinus as path };
