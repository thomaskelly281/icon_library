import { mdiSyllabaryKatakana } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SyllabaryKatakana(props: IconComponentProps) {
  return <Icon path={mdiSyllabaryKatakana} {...props} />;
}

export { mdiSyllabaryKatakana as path };
