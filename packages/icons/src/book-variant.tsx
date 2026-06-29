import { mdiBookVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookVariant(props: IconComponentProps) {
  return <Icon path={mdiBookVariant} {...props} />;
}

export { mdiBookVariant as path };
