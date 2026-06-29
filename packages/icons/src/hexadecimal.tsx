import { mdiHexadecimal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hexadecimal(props: IconComponentProps) {
  return <Icon path={mdiHexadecimal} {...props} />;
}

export { mdiHexadecimal as path };
