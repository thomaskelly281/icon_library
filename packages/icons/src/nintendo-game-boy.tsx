import { mdiNintendoGameBoy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NintendoGameBoy(props: IconComponentProps) {
  return <Icon path={mdiNintendoGameBoy} {...props} />;
}

export { mdiNintendoGameBoy as path };
