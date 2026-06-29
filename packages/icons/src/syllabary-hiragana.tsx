import { mdiSyllabaryHiragana } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SyllabaryHiragana(props: IconComponentProps) {
  return <Icon path={mdiSyllabaryHiragana} {...props} />;
}

export { mdiSyllabaryHiragana as path };
