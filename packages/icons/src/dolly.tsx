import { mdiDolly } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dolly(props: IconComponentProps) {
  return <Icon path={mdiDolly} {...props} />;
}

export { mdiDolly as path };
