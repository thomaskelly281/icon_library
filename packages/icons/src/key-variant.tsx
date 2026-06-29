import { mdiKeyVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyVariant(props: IconComponentProps) {
  return <Icon path={mdiKeyVariant} {...props} />;
}

export { mdiKeyVariant as path };
