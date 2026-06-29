import { mdiGatsby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gatsby(props: IconComponentProps) {
  return <Icon path={mdiGatsby} {...props} />;
}

export { mdiGatsby as path };
