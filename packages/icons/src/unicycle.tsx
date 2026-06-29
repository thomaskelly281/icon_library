import { mdiUnicycle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Unicycle(props: IconComponentProps) {
  return <Icon path={mdiUnicycle} {...props} />;
}

export { mdiUnicycle as path };
