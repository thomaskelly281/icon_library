import { mdiEmber } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ember(props: IconComponentProps) {
  return <Icon path={mdiEmber} {...props} />;
}

export { mdiEmber as path };
