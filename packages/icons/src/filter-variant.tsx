import { mdiFilterVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterVariant(props: IconComponentProps) {
  return <Icon path={mdiFilterVariant} {...props} />;
}

export { mdiFilterVariant as path };
