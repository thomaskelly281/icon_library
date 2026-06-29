import { mdiEmailVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailVariant(props: IconComponentProps) {
  return <Icon path={mdiEmailVariant} {...props} />;
}

export { mdiEmailVariant as path };
