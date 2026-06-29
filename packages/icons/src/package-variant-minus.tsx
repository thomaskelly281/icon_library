import { mdiPackageVariantMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantMinus(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantMinus} {...props} />;
}

export { mdiPackageVariantMinus as path };
