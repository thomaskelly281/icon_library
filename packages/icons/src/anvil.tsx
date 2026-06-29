import { mdiAnvil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Anvil(props: IconComponentProps) {
  return <Icon path={mdiAnvil} {...props} />;
}

export { mdiAnvil as path };
