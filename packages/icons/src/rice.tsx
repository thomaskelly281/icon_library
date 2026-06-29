import { mdiRice } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rice(props: IconComponentProps) {
  return <Icon path={mdiRice} {...props} />;
}

export { mdiRice as path };
