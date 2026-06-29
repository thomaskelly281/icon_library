import { mdiKoala } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Koala(props: IconComponentProps) {
  return <Icon path={mdiKoala} {...props} />;
}

export { mdiKoala as path };
