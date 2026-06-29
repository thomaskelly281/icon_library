import { mdiSyllabaryHangul } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SyllabaryHangul(props: IconComponentProps) {
  return <Icon path={mdiSyllabaryHangul} {...props} />;
}

export { mdiSyllabaryHangul as path };
