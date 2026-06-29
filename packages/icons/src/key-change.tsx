import { mdiKeyChange } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyChange(props: IconComponentProps) {
  return <Icon path={mdiKeyChange} {...props} />;
}

export { mdiKeyChange as path };
