import { mdiShareVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareVariant(props: IconComponentProps) {
  return <Icon path={mdiShareVariant} {...props} />;
}

export { mdiShareVariant as path };
