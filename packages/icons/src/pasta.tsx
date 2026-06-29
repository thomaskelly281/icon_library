import { mdiPasta } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pasta(props: IconComponentProps) {
  return <Icon path={mdiPasta} {...props} />;
}

export { mdiPasta as path };
