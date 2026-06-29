import { mdiDiversify } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Diversify(props: IconComponentProps) {
  return <Icon path={mdiDiversify} {...props} />;
}

export { mdiDiversify as path };
