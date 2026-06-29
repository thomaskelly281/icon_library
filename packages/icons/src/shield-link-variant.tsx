import { mdiShieldLinkVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldLinkVariant(props: IconComponentProps) {
  return <Icon path={mdiShieldLinkVariant} {...props} />;
}

export { mdiShieldLinkVariant as path };
