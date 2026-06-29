import { mdiFilterVariantPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterVariantPlus(props: IconComponentProps) {
  return <Icon path={mdiFilterVariantPlus} {...props} />;
}

export { mdiFilterVariantPlus as path };
