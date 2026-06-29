import { mdiPackageVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PackageVariant(props: IconComponentProps) {
  return <Icon path={mdiPackageVariant} {...props} />;
}

export { mdiPackageVariant as path };
