import { mdiKlingon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Klingon(props: IconComponentProps) {
  return <Icon path={mdiKlingon} {...props} />;
}

export { mdiKlingon as path };
