import { mdiStorefront } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Storefront(props: IconComponentProps) {
  return <Icon path={mdiStorefront} {...props} />;
}

export { mdiStorefront as path };
