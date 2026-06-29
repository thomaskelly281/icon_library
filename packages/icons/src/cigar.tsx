import { mdiCigar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cigar(props: IconComponentProps) {
  return <Icon path={mdiCigar} {...props} />;
}

export { mdiCigar as path };
