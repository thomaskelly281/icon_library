import { mdiDeleteVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteVariant(props: IconComponentProps) {
  return <Icon path={mdiDeleteVariant} {...props} />;
}

export { mdiDeleteVariant as path };
