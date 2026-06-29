import { mdiQuora } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Quora(props: IconComponentProps) {
  return <Icon path={mdiQuora} {...props} />;
}

export { mdiQuora as path };
