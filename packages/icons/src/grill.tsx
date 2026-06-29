import { mdiGrill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Grill(props: IconComponentProps) {
  return <Icon path={mdiGrill} {...props} />;
}

export { mdiGrill as path };
