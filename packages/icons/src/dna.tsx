import { mdiDna } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dna(props: IconComponentProps) {
  return <Icon path={mdiDna} {...props} />;
}

export { mdiDna as path };
