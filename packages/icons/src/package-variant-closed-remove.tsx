import { mdiPackageVariantClosedRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantClosedRemove(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantClosedRemove} {...props} />;
}

export { mdiPackageVariantClosedRemove as path };
