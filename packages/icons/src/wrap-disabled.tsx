import { mdiWrapDisabled } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrapDisabled(props: IconComponentProps) {
  return <Icon path={mdiWrapDisabled} {...props} />;
}

export { mdiWrapDisabled as path };
