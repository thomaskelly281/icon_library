import { mdiStorefrontPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontPlus(props: IconComponentProps) {
  return <Icon path={mdiStorefrontPlus} {...props} />;
}

export { mdiStorefrontPlus as path };
