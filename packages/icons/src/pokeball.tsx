import { mdiPokeball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pokeball(props: IconComponentProps) {
  return <Icon path={mdiPokeball} {...props} />;
}

export { mdiPokeball as path };
