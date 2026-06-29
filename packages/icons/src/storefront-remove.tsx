import { mdiStorefrontRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontRemove(props: IconComponentProps) {
  return <Icon path={mdiStorefrontRemove} {...props} />;
}

export { mdiStorefrontRemove as path };
