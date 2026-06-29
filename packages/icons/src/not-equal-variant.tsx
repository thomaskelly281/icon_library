import { mdiNotEqualVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotEqualVariant(props: IconComponentProps) {
  return <Icon path={mdiNotEqualVariant} {...props} />;
}

export { mdiNotEqualVariant as path };
