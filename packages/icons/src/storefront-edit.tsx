import { mdiStorefrontEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontEdit(props: IconComponentProps) {
  return <Icon path={mdiStorefrontEdit} {...props} />;
}

export { mdiStorefrontEdit as path };
