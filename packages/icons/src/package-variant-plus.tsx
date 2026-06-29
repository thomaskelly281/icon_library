import { mdiPackageVariantPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantPlus(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantPlus} {...props} />;
}

export { mdiPackageVariantPlus as path };
