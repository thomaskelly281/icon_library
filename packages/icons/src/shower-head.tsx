import { mdiShowerHead } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShowerHead(props: IconComponentProps) {
  return <Icon path={mdiShowerHead} {...props} />;
}

export { mdiShowerHead as path };
