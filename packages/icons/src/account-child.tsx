import { mdiAccountChild } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountChild(props: IconComponentProps) {
  return <Icon path={mdiAccountChild} {...props} />;
}

export { mdiAccountChild as path };
