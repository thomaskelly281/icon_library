import { mdiFilterVariantRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterVariantRemove(props: IconComponentProps) {
  return <Icon path={mdiFilterVariantRemove} {...props} />;
}

export { mdiFilterVariantRemove as path };
