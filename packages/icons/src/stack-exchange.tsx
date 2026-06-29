import { mdiStackExchange } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StackExchange(props: IconComponentProps) {
  return <Icon path={mdiStackExchange} {...props} />;
}

export { mdiStackExchange as path };
