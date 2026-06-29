import { mdiPackageVariantRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantRemove(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantRemove} {...props} />;
}

export { mdiPackageVariantRemove as path };
