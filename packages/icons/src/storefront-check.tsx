import { mdiStorefrontCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StorefrontCheck(props: IconComponentProps) {
  return <Icon path={mdiStorefrontCheck} {...props} />;
}

export { mdiStorefrontCheck as path };
