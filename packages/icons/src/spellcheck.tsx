import { mdiSpellcheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Spellcheck(props: IconComponentProps) {
  return <Icon path={mdiSpellcheck} {...props} />;
}

export { mdiSpellcheck as path };
