import { mdiDomainRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DomainRemove(props: IconComponentProps) {
  return <Icon path={mdiDomainRemove} {...props} />;
}

export { mdiDomainRemove as path };
