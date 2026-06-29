import { mdiUnicornVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UnicornVariant(props: IconComponentProps) {
  return <Icon path={mdiUnicornVariant} {...props} />;
}

export { mdiUnicornVariant as path };
