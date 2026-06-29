import { mdiDataMatrix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DataMatrix(props: IconComponentProps) {
  return <Icon path={mdiDataMatrix} {...props} />;
}

export { mdiDataMatrix as path };
