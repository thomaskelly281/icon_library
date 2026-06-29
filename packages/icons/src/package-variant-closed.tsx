import { mdiPackageVariantClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariantClosed(props: IconComponentProps) {
  return <Icon path={mdiPackageVariantClosed} {...props} />;
}

export { mdiPackageVariantClosed as path };
