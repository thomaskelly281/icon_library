import { mdiPokemonGo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PokemonGo(props: IconComponentProps) {
  return <Icon path={mdiPokemonGo} {...props} />;
}

export { mdiPokemonGo as path };
