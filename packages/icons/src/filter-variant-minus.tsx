import { mdiFilterVariantMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterVariantMinus(props: IconComponentProps) {
  return <Icon path={mdiFilterVariantMinus} {...props} />;
}

export { mdiFilterVariantMinus as path };
