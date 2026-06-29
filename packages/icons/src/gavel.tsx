import { mdiGavel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gavel(props: IconComponentProps) {
  return <Icon path={mdiGavel} {...props} />;
}

export { mdiGavel as path };
