import { mdiStorefrontMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontMinus(props: IconComponentProps) {
  return <Icon path={mdiStorefrontMinus} {...props} />;
}

export { mdiStorefrontMinus as path };
